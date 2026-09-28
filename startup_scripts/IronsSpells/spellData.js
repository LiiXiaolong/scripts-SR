// Takes the object you get in `ISBEvents.onCast(event => ...)`
global.getSpellCost = (event) => {
  if (!event) return 0

  // OnCast provides the final mana cost (after any modifications)
  if (event.manaCost != null) return event.manaCost

  // Fallback: compute from spellId + level
  let spellId = event.spellId != null ? String(event.spellId) : null
  let level = event.spellLevel != null ? event.spellLevel : 1
  if (!spellId) return 0
  return SpellRegistry.getSpell(spellId).getManaCost(level)
}


// Returns spell data object for a spell id (or null if not found)


/**
 * 
 * @param {*} spellId 
 * @param {*} level 
 * @returns id, cast_time, max_level, school
 */
global.getISBSpellData = function (spellId, level) {

  if (spellId == null) return null
  if (level == null) level = 1

  let rl = ResourceLocation.parse(String(spellId))
  let spell = SpellRegistry.REGISTRY.get().getValue(rl)
  if (spell == null) return null

  let schoolPath = String(spell.getSchoolType().getId().getPath()).toLowerCase()

  // ISB cast times are in ticks; convert to seconds; default 0.1 if instant/zero
  let castSeconds = spell.getCastTime(level) / 20
  if (castSeconds <= 0) castSeconds = 0.1

  return {
    id: String(spell.getSpellId()),
    cast_time: castSeconds,
    max_level: spell.getMaxLevel(),
    school: schoolPath
  }
}



global.logAllISBSpellIds = function () {
  const reg = SpellRegistry.REGISTRY.get()
  if (reg == null) {
    console.log('[ISB] Spell registry not ready')
    return []
  }

  const ids = []
  const it = reg.getKeys().iterator() // Iterator<ResourceLocation>

  while (it.hasNext()) {
    const key = it.next()
    const spell = reg.getValue(key)
    if (spell == null) continue
    ids.push(String(spell.getSpellId()))
  }

  ids.sort()
  console.log('[ISB] Spell IDs (' + ids.length + '):')
  for (let i = 0; i < ids.length; i++) console.log(ids[i])

  return ids
}



function schoolToPath(school) {
  if (school == null) return null

  // accept SchoolType or ResourceLocation objects too
  try {
    if (school.getId) return String(school.getId().getPath()).toLowerCase()
  } catch (e) {}
  try {
    if (school.getPath) return String(school.getPath()).toLowerCase()
  } catch (e) {}

  let s = String(school).trim().toLowerCase()
  if (s.indexOf(':') !== -1) s = s.split(':')[1]
  return s
}

// Returns array of spell ids in that school
global.getAllISBSpellsInSchool = function (school, includeDisabled) {
  if (includeDisabled == null) includeDisabled = false

  let wantedPath = schoolToPath(school)
  if (!wantedPath) return []

  let wanted = String(wantedPath)

  let reg = SpellRegistry.REGISTRY.get()
  let out = []

  let it = reg.getKeys().iterator()
  while (it.hasNext()) {
    let key = it.next()
    let spell = reg.getValue(key)
    if (spell == null) continue

    // guard per-spell so one bad entry can't break the loop
    try {
      if (!includeDisabled && !spell.isEnabled()) continue
      let schoolPath = spell.getSchoolType().getId().getPath() // Java String
      if (wanted.equalsIgnoreCase(schoolPath)) out.push(String(spell.getSpellId()))
    } catch (e) {}
  }

  out.sort()
  return out
}

global.randomSpellInSchool = function (school) {
  let ids = global.getAllISBSpellsInSchool(school)
  if (ids.length === 0) return null
  return ids[Math.floor(Math.random() * ids.length)]
}