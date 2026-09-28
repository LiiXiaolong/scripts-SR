const $SuperiorAlliesApi = Java.loadClass('com.alexh.superiorallies.api.SuperiorAlliesApi')
const $FamiliarCapacityService = Java.loadClass('com.alexh.superiorallies.compat.familiars.FamiliarCapacityService')

function beastmasterSummonResult(result) {
  return Object.freeze({
    success: Boolean(result.success()),
    reason: String(result.reason()),
    petKey: String(result.petKey()),
    entityTypeId: String(result.entityTypeId()),
    entityUuid: String(result.entityUuid()),
    activeCount: Number(result.activeCount()),
    cap: Number(result.cap()),
    remainingCooldownTicks: Number(result.remainingCooldownTicks()),
    slotId: Number(result.slotId())
  })
}

function beastmasterPetResetResult(result) {
  if (!result) {
    return Object.freeze({
      consumedCount: 0,
      staleRecordsCleared: 0,
      skippedCount: 0,
      changedAny: false,
      entityTypeIds: Object.freeze([]),
      petKeys: Object.freeze([])
    })
  }

  let entityTypeIds = []
  let petKeys = []
  try {
    let ids = result.entityTypeIds()
    for (let i = 0; i < ids.size(); i++) {
      entityTypeIds.push(String(ids.get(i)))
    }
  } catch (e) {}
  try {
    let keys = result.petKeys()
    for (let i = 0; i < keys.size(); i++) {
      petKeys.push(String(keys.get(i)))
    }
  } catch (e) {}

  return Object.freeze({
    consumedCount: Number(result.consumedCount()),
    staleRecordsCleared: Number(result.staleRecordsCleared()),
    skippedCount: Number(result.skippedCount()),
    changedAny: Boolean(result.changedAny()),
    entityTypeIds: Object.freeze(entityTypeIds),
    petKeys: Object.freeze(petKeys)
  })
}

function beastmasterRecallResult(result) {
  if (!result) {
    return Object.freeze({
      recalled: 0,
      failed: 0,
      skipped: 0,
      anyRecalled: false,
      recalledIds: Object.freeze([])
    })
  }

  let recalledIds = []
  try {
    let ids = result.recalledIds()
    for (let i = 0; i < ids.size(); i++) {
      recalledIds.push(String(ids.get(i)))
    }
  } catch (e) {}

  let recalled = 0
  let failed = 0
  let skipped = 0
  let anyRecalled = false
  try { recalled = Number(result.recalled()) } catch (e) {}
  try { failed = Number(result.failed()) } catch (e) {}
  try { skipped = Number(result.skipped()) } catch (e) {}
  try { anyRecalled = Boolean(result.anyRecalled()) } catch (e) { anyRecalled = recalled > 0 }

  return Object.freeze({
    recalled: recalled,
    failed: failed,
    skipped: skipped,
    anyRecalled: anyRecalled,
    recalledIds: Object.freeze(recalledIds)
  })
}

function javaSnapshotValue(snapshot, key, fallback) {
  if (!snapshot || !key) return fallback

  try {
    return snapshot[key]()
  } catch (e) {}

  try {
    let member = snapshot[key]
    if (member !== undefined && member !== null) return member
  } catch (e) {}

  try {
    let getterName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`
    let getter = snapshot[getterName]
    if (typeof getter === 'function') return getter.call(snapshot)
  } catch (e) {}

  try {
    let isGetterName = `is${key.charAt(0).toUpperCase()}${key.slice(1)}`
    let isGetter = snapshot[isGetterName]
    if (typeof isGetter === 'function') return isGetter.call(snapshot)
  } catch (e) {}

  return fallback
}

function javaSnapshotBooleanValue(snapshot, key, fallback) {
  let value = javaSnapshotValue(snapshot, key, fallback)
  if (typeof value === 'boolean') return value
  return String(value).toLowerCase() === 'true'
}

function beastmasterPetMenuEntries(entries) {
  let out = []
  if (!entries) return Object.freeze(out)

  let size = 0
  try {
    size = Number(entries.size())
  } catch (e) {
    console.error(`[Superior][Beastmaster] Failed reading native pet menu entry count: ${e}`)
    throw e
  }

  for (let i = 0; i < size; i++) {
    try {
      let entry = entries.get(i)
      let petKey = javaSnapshotValue(entry, 'petKey', '')
      let displayName = javaSnapshotValue(entry, 'displayName', petKey)
      let icon = javaSnapshotValue(entry, 'icon', '')
      let unlocked = javaSnapshotBooleanValue(entry, 'unlocked', true)
      let selected = javaSnapshotBooleanValue(entry, 'selected', false)
      if (!petKey) throw new Error('native entry had no petKey')
      out.push(Object.freeze({
        petKey: String(petKey),
        displayName: String(displayName),
        icon: String(icon),
        unlocked: unlocked,
        selected: selected
      }))
    } catch (e) {
      console.error(`[Superior][Beastmaster] Failed converting native pet menu entry ${i + 1}/${size}: ${e}`)
      throw e
    }
  }

  return Object.freeze(out)
}

const superiorAlliesGlobal = Object.freeze({
  available: function () {
    return true
  },

  registerSummon: function (entity, owner) {
    return $SuperiorAlliesApi.registerSummon(entity, owner)
  },
  registerTamed: function (entity, owner) {
    return $SuperiorAlliesApi.registerTamed(entity, owner)
  },
  registerPet: function (entity, owner) {
    return $SuperiorAlliesApi.registerPet(entity, owner)
  },
  registerFamiliar: function (entity, owner) {
    return $SuperiorAlliesApi.registerFamiliar(entity, owner)
  },
  addClassification: function (entity, classification) {
    return $SuperiorAlliesApi.addClassification(entity, String(classification))
  },
  getOwnedFamiliarCount: function (player) {
    return Number($FamiliarCapacityService.getOwnedFamiliarCount(player))
  },
  getOwnedFamiliarCap: function (player) {
    return Number($FamiliarCapacityService.getOwnedFamiliarCap(player))
  },
  canOwnMoreFamiliars: function (player, currentOwnedCount) {
    if (currentOwnedCount == undefined) {
      return $FamiliarCapacityService.canOwnMore(player)
    }
    return $FamiliarCapacityService.canOwnMore(player, Number(currentOwnedCount))
  },
  getOwnedFamiliarRemainingSlots: function (player, currentOwnedCount) {
    if (currentOwnedCount == undefined) {
      return Number($FamiliarCapacityService.remainingSlots(player))
    }
    return Number($FamiliarCapacityService.remainingSlots(player, Number(currentOwnedCount)))
  },
  clearControl: function (entity) {
    return $SuperiorAlliesApi.clearControl(entity)
  },

  isControlled: function (entity) {
    return $SuperiorAlliesApi.isControlled(entity)
  },
  isSummon: function (entity) {
    return $SuperiorAlliesApi.isSummon(entity)
  },
  isTamed: function (entity) {
    return $SuperiorAlliesApi.isTamed(entity)
  },
  getOwner: function (entity) {
    return $SuperiorAlliesApi.getOwner(entity)
  },
  getOwnerUuid: function (entity) {
    return $SuperiorAlliesApi.getOwnerUuid(entity)
  },
  isOwner: function (owner, entity) {
    return $SuperiorAlliesApi.isOwner(owner, entity)
  },
  getControlKind: function (entity) {
    return $SuperiorAlliesApi.getControlKind(entity)
  },

  setFocusTarget: function (entity, target) {
    return $SuperiorAlliesApi.setFocusTarget(entity, target)
  },
  clearFocusTarget: function (entity) {
    return $SuperiorAlliesApi.clearFocusTarget(entity)
  },
  setAggroRadius: function (entity, radius) {
    return $SuperiorAlliesApi.setAggroRadius(entity, Number(radius))
  },
  isHoldingPosition: function (entity) {
    return $SuperiorAlliesApi.isHoldingPosition(entity)
  },
  setHoldPosition: function (entity, holdPosition) {
    return $SuperiorAlliesApi.setHoldPosition(entity, Boolean(holdPosition))
  },
  refreshPetStats: function (entity) {
    return $SuperiorAlliesApi.refreshPetStats(entity)
  },
  areAllied: function (left, right) {
    return $SuperiorAlliesApi.areAllied(left, right)
  },

  cycleBeastmasterSelection: function (player, delta) {
    return String($SuperiorAlliesApi.cycleBeastmasterSelection(player, Number(delta)) || '')
  },
  getSelectedBeastmasterPet: function (player) {
    return String($SuperiorAlliesApi.getSelectedBeastmasterPet(player) || '')
  },
  setSelectedBeastmasterPet: function (player, petKey) {
    return $SuperiorAlliesApi.setSelectedBeastmasterPet(player, String(petKey))
  },
  getBeastmasterPetMenuEntries: function (player) {
    return beastmasterPetMenuEntries($SuperiorAlliesApi.getBeastmasterPetMenuEntries(player))
  },
  getBeastmasterPetMenuEntryCount: function (player) {
    let entries = $SuperiorAlliesApi.getBeastmasterPetMenuEntries(player)
    return entries ? Number(entries.size()) : 0
  },
  summonSelectedBeastmasterPet: function (player) {
    return $SuperiorAlliesApi.summonSelectedBeastmasterPet(player)
  },
  summonSelectedBeastmasterPetResult: function (player) {
    return beastmasterSummonResult($SuperiorAlliesApi.summonSelectedBeastmasterPetDetailed(player))
  },
  recallBeastmasterPets: function (player) {
    return beastmasterRecallResult($SuperiorAlliesApi.recallBeastmasterPets(player))
  },
  summonBeastmasterSlot: function (player, slotId) {
    return $SuperiorAlliesApi.summonBeastmasterSlot(player, Number(slotId))
  },
  summonBeastmasterSlotResult: function (player, slotId) {
    return beastmasterSummonResult($SuperiorAlliesApi.summonBeastmasterSlotDetailed(player, Number(slotId)))
  },
  summonBeastmasterPetResult: function (player, petKey) {
    return beastmasterSummonResult($SuperiorAlliesApi.summonBeastmasterPetDetailed(player, String(petKey)))
  },
  bindBeastmasterSlot: function (player, slotId, petKey) {
    return $SuperiorAlliesApi.bindBeastmasterSlot(player, Number(slotId), String(petKey))
  },
  unlockBeastmasterPet: function (player, petKey) {
    return $SuperiorAlliesApi.unlockBeastmasterPet(player, String(petKey))
  },
  unlockBeastmasterByUnlockKey: function (player, unlockKey) {
    return $SuperiorAlliesApi.unlockBeastmasterByUnlockKey(player, String(unlockKey))
  },
  unlockAllBeastmasterPets: function (player) {
    return Number($SuperiorAlliesApi.unlockAllBeastmasterPets(player))
  },
  lockBeastmasterPet: function (player, petKey) {
    return $SuperiorAlliesApi.lockBeastmasterPet(player, String(petKey))
  },
  lockBeastmasterByUnlockKey: function (player, unlockKey) {
    return $SuperiorAlliesApi.lockBeastmasterByUnlockKey(player, String(unlockKey))
  },
  setBeastmasterApexUnlock: function (player, apexKey, unlocked) {
    return $SuperiorAlliesApi.setBeastmasterApexUnlock(player, String(apexKey), Boolean(unlocked))
  },
  getBeastmasterAbilityLevel: function (player, abilityId) {
    return Number($SuperiorAlliesApi.getBeastmasterAbilityLevel(player, String(abilityId)))
  },
  setBeastmasterAbilityLevel: function (player, abilityId, level) {
    return Number($SuperiorAlliesApi.setBeastmasterAbilityLevel(player, String(abilityId), Number(level)))
  },
  clearBeastmasterAbilityLevel: function (player, abilityId) {
    return $SuperiorAlliesApi.clearBeastmasterAbilityLevel(player, String(abilityId))
  },
  refreshBeastmasterLoadouts: function (player) {
    return Number($SuperiorAlliesApi.refreshBeastmasterLoadouts(player))
  },
  getBeastmasterPetCap: function (player) {
    return Number($SuperiorAlliesApi.getBeastmasterPetCap(player))
  },
  getBeastmasterActivePetCount: function (player) {
    return Number($SuperiorAlliesApi.getBeastmasterActivePetCount(player))
  },
  canSummonBeastmasterPet: function (player) {
    return $SuperiorAlliesApi.canSummonBeastmasterPet(player)
  },
  setBeastmasterCapSource: function (player, sourceId, value) {
    return Number($SuperiorAlliesApi.setBeastmasterCapSource(player, String(sourceId), Number(value)))
  },
  clearBeastmasterCapSource: function (player, sourceId) {
    return $SuperiorAlliesApi.clearBeastmasterCapSource(player, String(sourceId))
  },
  lockAllBeastmasterPets: function (player) {
    return Number($SuperiorAlliesApi.lockAllBeastmasterPets(player))
  },
  unbindBeastmasterSlot: function (player, slotId) {
    return $SuperiorAlliesApi.unbindBeastmasterSlot(player, Number(slotId))
  },
  clearBeastmasterSlots: function (player) {
    return Number($SuperiorAlliesApi.clearBeastmasterSlots(player))
  },
  hardResetBeastmasterState: function (player) {
    return $SuperiorAlliesApi.hardResetBeastmasterState(player)
  },
  resetBeastmasterPets: function (player) {
    return beastmasterPetResetResult($SuperiorAlliesApi.resetBeastmasterPets(player))
  },
  setBeastmasterPetScalingSource: function (player, sourceId, healthMultiplier, movementSpeedMultiplier, armorMultiplier, armorBonus) {
    return $SuperiorAlliesApi.setBeastmasterPetScalingSource(
      player,
      String(sourceId),
      Number(healthMultiplier),
      Number(movementSpeedMultiplier),
      Number(armorMultiplier),
      Number(armorBonus)
    )
  },
  setBeastmasterPetScalingSourceForPet: function (player, sourceId, petKey, attackMultiplier, healthMultiplier, movementSpeedMultiplier, armorMultiplier, armorBonus) {
    return $SuperiorAlliesApi.setBeastmasterPetScalingSourceForPet(
      player,
      String(sourceId),
      String(petKey),
      Number(attackMultiplier),
      Number(healthMultiplier),
      Number(movementSpeedMultiplier),
      Number(armorMultiplier),
      Number(armorBonus)
    )
  },
  setBeastmasterPetScalingSourceForPetWithHealthOverride: function (player, sourceId, petKey, attackMultiplier, healthMultiplier, movementSpeedMultiplier, armorMultiplier, armorBonus, maxHealthOverride) {
    return $SuperiorAlliesApi.setBeastmasterPetScalingSourceForPetWithHealthOverride(
      player,
      String(sourceId),
      String(petKey),
      Number(attackMultiplier),
      Number(healthMultiplier),
      Number(movementSpeedMultiplier),
      Number(armorMultiplier),
      Number(armorBonus),
      Number(maxHealthOverride)
    )
  },
  clearBeastmasterPetScalingSourceForPet: function (player, sourceId) {
    return $SuperiorAlliesApi.clearBeastmasterPetScalingSourceForPet(player, String(sourceId))
  },
  setBeastmasterPetCooldownMultiplierSource: function (player, sourceId, petKey, cooldownMultiplier) {
    return $SuperiorAlliesApi.setBeastmasterPetCooldownMultiplierSource(
      player,
      String(sourceId),
      String(petKey),
      Number(cooldownMultiplier)
    )
  },
  clearBeastmasterPetCooldownMultiplierSource: function (player, sourceId) {
    return $SuperiorAlliesApi.clearBeastmasterPetCooldownMultiplierSource(player, String(sourceId))
  },
  refreshBeastmasterPetStats: function (player) {
    return Number($SuperiorAlliesApi.refreshBeastmasterPetStats(player))
  },
  syncBeastmasterState: function (player) {
    return $SuperiorAlliesApi.syncBeastmasterState(player)
  }
})

global.superiorAllies = superiorAlliesGlobal
global.superiorAi = superiorAlliesGlobal

global.isSuperiorControlled = function (entity) {
  return global.superiorAllies.isControlled(entity)
}

global.isSuperiorSummon = function (entity) {
  return global.superiorAllies.isSummon(entity)
}

global.isSuperiorTamed = function (entity) {
  return global.superiorAllies.isTamed(entity)
}
