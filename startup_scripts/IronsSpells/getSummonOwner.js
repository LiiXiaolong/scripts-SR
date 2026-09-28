const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')
const $NbtUtils = Java.loadClass('net.minecraft.nbt.NbtUtils')
const $ServerLevel = Java.loadClass('net.minecraft.server.level.ServerLevel')
const $SummonManager = Java.loadClass('io.redspace.ironsspellbooks.capabilities.magic.SummonManager')
const $IMagicSummon = Java.loadClass('io.redspace.ironsspellbooks.entity.mobs.IMagicSummon')
const $OwnableEntity = Java.loadClass('net.minecraft.world.entity.OwnableEntity')



global.getSummonOwner = function (entity) {
  if (entity == null) return null

  let mcEntity = entity

  // Primary: Iron's Spellbooks keeps a runtime UUID->UUID map in SummonManager.
  if ($SummonManager != null) {
    try {
      let owner = $SummonManager.getOwner(mcEntity)
      if (owner != null) return owner
    } catch (e) {
      // Fall through to other approaches.
    }
  }

  // Secondary: vanilla "ownable" entities (tamed mobs, etc.).
  if ($OwnableEntity != null) {
    try {
      if (mcEntity instanceof $OwnableEntity) {
        let owner = mcEntity.getOwner()
        if (owner != null) return owner
      }
    } catch (e) {
      // Fall through.
    }
  }

  // Fallback: some entities serialize `Summoner` UUID directly in their save data.
  // Example in this mod: `io.redspace.ironsspellbooks.entity.mobs.frozen_humanoid.FrozenHumanoid`.
  try {
    let tag = new $CompoundTag()
    if (typeof mcEntity.saveWithoutId === 'function') {
      mcEntity.saveWithoutId(tag)
    } else if (typeof mcEntity.save === 'function') {
      mcEntity.save(tag)
    }

    if (tag.hasUUID && tag.hasUUID('Summoner')) {
      let ownerUuid = tag.getUUID('Summoner')
      let level = typeof mcEntity.level === 'function' ? mcEntity.level() : mcEntity.level
      if (level instanceof $ServerLevel) {
        let owner = level.getEntity(ownerUuid)
        if (owner != null) return owner
      }
    }
  } catch (e) {
    // Ignore.
  }

  return null
}



function _entityUuid(entity) {
  if (entity == null) return null
  try {
    if (entity.getUUID) return entity.getUUID()
  } catch (e) {}
  try {
    if (entity.uuid) return entity.uuid
  } catch (e) {}
  return null
}

function _sameEntity(a, b) {
  if (a == null || b == null) return false
  try {
    let aUuid = _entityUuid(a)
    let bUuid = _entityUuid(b)
    return aUuid != null && bUuid != null && String(aUuid) === String(bUuid)
  } catch (e) {
    return false
  }
}

function _addEntityTag(entity, tag) {
  try {
    entity.tags.add(tag)
    return true
  } catch (e) {}
  try {
    if (entity.addTag) {
      entity.addTag(tag)
      return true
    }
  } catch (e) {}
  return false
}

function _putEntityPersistentString(entity, key, value) {
  try {
    entity.persistentData.putString(key, value)
    return true
  } catch (e) {}
  try {
    if (entity.getPersistentData) {
      entity.getPersistentData().putString(key, value)
      return true
    }
  } catch (e) {}
  return false
}

function setSummonOwner(entity, owner) {

  let mcEntity = entity
  let mcOwner = owner
  // Basic sanity check that both look like real MC entities.
  if (_entityUuid(mcEntity) == null || _entityUuid(mcOwner) == null) return false

  // Iron's SummonManager stores owner -> summon UUIDs in unsynchronized HashSets and
  // iterates them during logout. Only register real Iron magic summons here; KubeJS
  // pets and spell helper entities use tags/persistentData instead.
  try {
    if (!(mcEntity instanceof $IMagicSummon)) return false
  } catch (e) {
    return false
  }

  let changed = false

  // 1) Primary: ISSB runtime owner map.
  if ($SummonManager != null) {
    try {
      $SummonManager.setOwner(mcEntity, mcOwner)
      try {
        if (global.hardenIronsSummonManagerOwnerSets) global.hardenIronsSummonManagerOwnerSets()
      } catch (e) {}
      changed = true
    } catch (e) {}
  }


  // 2) Some entities expose a direct summoner setter.
  try {
    if (mcEntity.setSummoner != null) {
      mcEntity.setSummoner(mcOwner)
      changed = true
    }
  } catch (e) {}

  // 3) Generic owner setter used by many projectiles/area entities.
  try {
    if (mcEntity.setOwner != null) {
      mcEntity.setOwner(mcOwner)
      changed = true
    }
  } catch (e) {}

  // 4) Vanilla tameables and a few others use owner UUID directly.
  try {
    if (mcEntity.setOwnerUUID != null) {
      mcEntity.setOwnerUUID(_entityUuid(mcOwner))
      changed = true
    }
  } catch (e) {}
  if (!changed) return false
  let resolvedOwner = global.getSummonOwner(mcEntity)
  if (resolvedOwner == null) return false
  return _sameEntity(resolvedOwner, mcOwner)
}

global.setSummonOwner = setSummonOwner

global.applyOwnedEntityMarkers = function(entity, owner, opts) {
  if (entity == null || owner == null) return false
  if (opts == null) opts = {}

  let ownerUsername = ''
  try {
    ownerUsername = String(owner.username || owner.getName().getString() || '')
  } catch (e) {}
  if (!ownerUsername) return false

  let tags = opts.tags || []
  for (let i = 0; i < tags.length; i++) {
    try {
      _addEntityTag(entity, String(tags[i]).replace('{owner}', ownerUsername))
    } catch (e) {}
  }

  if (opts.ownerTag !== false) {
    try { _addEntityTag(entity, `Owner:${ownerUsername}`) } catch (e) {}
  }

  if (opts.persistentOwner !== false) {
    try { _putEntityPersistentString(entity, 'owner', ownerUsername) } catch (e) {}
  }

  if (opts.summonerNbt !== false) {
    try {
      let ownerUuid = _entityUuid(owner)
      if (ownerUuid == null) throw 'missing owner uuid'
      const tag = new $CompoundTag()
      tag.put('Summoner', $NbtUtils.createUUID(ownerUuid))
      entity.mergeNbt(tag)
    } catch (e) {}
  }

  if (opts.registerNativeOwner !== false) {
    try { setSummonOwner(entity, owner) } catch (e) {}
  }

  return true
}
