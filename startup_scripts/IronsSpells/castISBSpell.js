global.instantCastISBSpell = function(player, spellId, baseLevel, isFree, customManaCost, castSource, triggerCooldown, opts) {
  let p = player
  if (p == null) {console.log('player is null'); return false}
  //player.tell(Instant casting ${spellId})
  if (isFree == undefined) isFree = true

  if (baseLevel == undefined) baseLevel = 1
  if (castSource == undefined) castSource = CastSource.SPELLBOOK
  if (triggerCooldown == undefined) triggerCooldown = false
  if (opts == undefined) opts = {}
  if (opts.respectCanCast == undefined) opts.respectCanCast = false
  if (opts.respectPreconditions == undefined) opts.respectPreconditions = false
  if (opts.firePreCastEvent == undefined) opts.firePreCastEvent = true
  if (customManaCost == undefined) opts.customManaCost = 0

  let levelObj = p.level
  let spell = isbGetSpell(spellId)
  let data = isbMagicData(p)
  let level = spell.getLevelFor(baseLevel, p)
  let manaCost = spell.getManaCost(level)

  let playerMana = global.getPlayerMana(p)

  if (opts.respectCanCast != false) {
    let r = spell.canBeCastedBy(level, castSource, data, p)
    //player.tell(r.isSuccess())
    if (!r.isSuccess()) {console.log('cant cast: r is false'); return false}
  }

  if (opts.respectPreconditions != false) {
    if (!spell.checkPreCastConditions(levelObj, level, p, data)) {console.log('cant cast: preconditions not met'); return false}
  }

  if (opts.firePreCastEvent != false) {
    let pre = new SpellPreCastEvent(p, spell.getSpellId(), level, spell.getSchoolType(), castSource)
    //player.tell(Fired pre-cast event)
    if (MinecraftForge.EVENT_BUS.post(pre)) {console.log('cant cast: pre-cast event fired'); return false}
  }
  let expectedCastDataClass = null
  try {
    let emptyCastData = spell.getEmptyCastData()
    if (emptyCastData != null) expectedCastDataClass = String(emptyCastData.getClass().getName())
  } catch (e) {}

  try {
    let existingCastData = data.getAdditionalCastData()
    let keepExistingCastData = false
    if (existingCastData != null && expectedCastDataClass != null) {
      let existingCastDataClass = String(existingCastData.getClass().getName())
      if (existingCastDataClass == expectedCastDataClass) keepExistingCastData = true
    }
    if (!keepExistingCastData) {
      if (data.resetAdditionalCastData) data.resetAdditionalCastData()
      else data.setAdditionalCastData(null)
    }
  } catch (e) {
    try {
      data.setAdditionalCastData(null)
    } catch (ignored) {}
  }

  //console.log(Casting ${spellId} at level ${level} from Player: ${p.username} with the cast source of ${castSource}. Level Obj: ${levelObj})
  spell.castSpell(levelObj, level, player, CastSource.SPELLBOOK, false)

  try {
    if (data.resetAdditionalCastData) data.resetAdditionalCastData()
    else data.setAdditionalCastData(null)
  } catch (e) {
    try {
      data.setAdditionalCastData(null)
    } catch (ignored) {}
  }

  let resetCastDataLater = () => {
    try {
      let scheduledData = isbMagicData(p)
      if (scheduledData == null) return
      if (scheduledData.resetAdditionalCastData) scheduledData.resetAdditionalCastData()
      else scheduledData.setAdditionalCastData(null)
    } catch (e) {}
  }

  if (global.runAfterTicks) global.runAfterTicks(1, resetCastDataLater)
  else Utils.server.scheduleInTicks(1, resetCastDataLater)



  if (isFree) global.addPlayerMana(p, manaCost)
  if (customManaCost > 0) global.setPlayerMana(p, playerMana - customManaCost)
  return true
}













































// Cast with animation
global.castISBSpell = function(player, spellId, baseLevel, castSource, triggerCooldown, castingEquipmentSlot, opts) {
  let p = player
  if (p == null) return false

  if (baseLevel == null) baseLevel = 1
  if (castSource == null) castSource = CastSource.COMMAND
  if (triggerCooldown == null) triggerCooldown = true
  if (castingEquipmentSlot == null) castingEquipmentSlot = 'mainhand'
  if (opts == null) opts = {}
  if (opts.respectCanCast == null) opts.respectCanCast = true
  if (opts.firePreCastEvent == null) opts.firePreCastEvent = true

  let levelObj = p.level
  let spell = isbGetSpell(spellId)
  let data = isbMagicData(p)
  let level = spell.getLevelFor(baseLevel, p)

  if (opts.respectCanCast) {
    let r = spell.canBeCastedBy(level, castSource, data, p)
    if (!r.isSuccess()) return false
  }

  if (opts.firePreCastEvent) {
    let pre = new SpellPreCastEvent(p, spell.getSpellId(), level, spell.getSchoolType(), castSource)
    if (MinecraftForge.EVENT_BUS.post(pre)) return false
  }

  // Begin casting WITHOUT calling spell.checkPreCastConditions(...) (weapon locks commonly live there)
  let castTime = spell.getEffectiveCastTime(level, p)

  if (p.isUsingItem && p.isUsingItem()) p.stopUsingItem()
  data.initiateCast(spell, level, castTime, castSource, castingEquipmentSlot)
  data.setPlayerCastingItem(ItemStack.EMPTY)
  spell.onServerPreCast(levelObj, level, p, data)

  PacketDistributor.sendToPlayer(p, new UpdateCastingStatePacket(spell.getSpellId(), level, castTime, castSource, castingEquipmentSlot))
  PacketDistributor.sendToPlayersTrackingEntityAndSelf(p, new OnCastStartedPacket(p.getUUID(), spell.getSpellId(), level))
  return true
}
