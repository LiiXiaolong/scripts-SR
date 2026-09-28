// Sync Superior Spellcasting effective value with KubeJS server power_level.

/**
 * 
 * var superiorSpellcastingBridge = null
var bridgeInitAttempted = false
var bridgeAvailable = false
var bridgeErrorLogged = false
var lastSyncedPowerLevel = null

function initSuperiorBridge() {
  if (bridgeInitAttempted) return
  bridgeInitAttempted = true

  try {
    superiorSpellcastingBridge = Java.loadClass('com.alexh.superiorspellcasting.integration.kubejs.KubeJsBridge')
    bridgeAvailable = true
    console.info('[superior_spellcasting_sync] Bridge loaded')
  } catch (err) {
    bridgeAvailable = false
    console.info('[superior_spellcasting_sync] Superior Spellcasting bridge not available; sync disabled')
  }
}

function readServerPowerLevel(server) {
  if (!server || !server.persistentData) return 0

  var raw = null
  try {
    if (typeof server.persistentData.get === 'function') {
      raw = server.persistentData.get('power_level')
    }
  } catch (err) {
    raw = null
  }

  var value = Number(raw)
  if (!(typeof value === 'number' && isFinite(value))) {
    try {
      if (typeof server.persistentData.getInt === 'function') {
        value = Number(server.persistentData.getInt('power_level'))
      }
    } catch (err) {
      value = Number(server.persistentData.power_level)
    }
  }

  if (!(typeof value === 'number' && isFinite(value))) value = 0
  value = Math.floor(value)
  if (value < 0) value = 0
  if (value > 10) value = 10
  return value
}

function syncSuperiorPowerLevel(server, reason, force) {
  initSuperiorBridge()
  if (!bridgeAvailable || !superiorSpellcastingBridge || !server) return false

  var powerLevel = readServerPowerLevel(server)
  if (!force && lastSyncedPowerLevel === powerLevel) return false

  try {
    var applied = Number(superiorSpellcastingBridge.setOverride(powerLevel))
    lastSyncedPowerLevel = powerLevel

    if (reason === 'manual' || reason === 'server_loaded') {
      console.info('[superior_spellcasting_sync] ' + reason + ': power_level=' + powerLevel + ', applied=' + applied)
    }
    return true
  } catch (err) {
    if (!bridgeErrorLogged) {
      bridgeErrorLogged = true
      console.error('[superior_spellcasting_sync] Failed to sync power level to Superior Spellcasting override')
      console.error(String(err))
    }
    return false
  }
}

ServerEvents.loaded(function (event) {
  syncSuperiorPowerLevel(event.server, 'server_loaded', true)
})

ServerEvents.tick(function (event) {
  // Keep sync lightweight: check once per second.
  if (event.server.tickCount % 20 !== 0) return
  syncSuperiorPowerLevel(event.server, 'tick', false)
})

ServerEvents.customCommand('sync_superior_power', function (event) {
  var player = event.player
  if (!player || !player.hasPermissions(2)) return

  var synced = syncSuperiorPowerLevel(event.server, 'manual', true)
  var powerLevel = readServerPowerLevel(event.server)

  var effective = -1
  var overrideEnabled = false
  try {
    if (superiorSpellcastingBridge) {
      effective = Number(superiorSpellcastingBridge.getEffectiveValue())
      overrideEnabled = !!superiorSpellcastingBridge.isOverrideEnabled()
    }
  } catch (err) {
    // Keep command response stable even if introspection fails.
  }

  player.tell('[SuperiorSpellcasting] power_level=' + powerLevel + ', effective=' + effective + ', override=' + overrideEnabled + ', synced=' + synced)
})


EntityEvents.spawned(event => {
  if (!event.entity) return
  let random_schools = ['fire', 'lightning', 'nature', 'holy', 'evocation', 'ender']
  let school = random_schools[Math.floor(Math.random() * random_schools.length)]
  createModBasedSpellcaster(event.entity, school)
})
 * 
 * 
 * 
 */
