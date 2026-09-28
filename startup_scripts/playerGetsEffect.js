// kubejs/server_scripts/player_effect_events.js

global.PlayerEffects = global.PlayerEffects || {
  _addedListeners: [],
  onAdded: function (fn) {
    if (typeof fn === 'function') this._addedListeners.push(fn)
  }
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Added', e => {
  let entity = e.getEntity()
  if (!entity || !entity.isPlayer()) return

  let inst = e.getEffectInstance()
  if (!inst) return

  // Resolve a clean registry id like "minecraft:speed"
  let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
  let effect = inst.getEffect()
  let key = ForgeRegistries.MOB_EFFECTS.getKey(effect)

  let effectId
  if (key) {
    effectId = String(key) // ResourceLocation toString -> "namespace:path"
  } else if (effect && typeof effect.toString === 'function') {
    effectId = String(effect.toString())
  } else {
    effectId = 'unknown'
  }

  // Safely read flags (method names can vary slightly across mappings)
  let ambient = false
  let showParticles = true
  let showIcon = true
  try { ambient = !!inst.isAmbient() } catch (err) {}
  try { showParticles = !!inst.isVisible() } catch (err) {}
  try { showIcon = !!inst.showIcon() } catch (err) {}

  let payload = {
    player: entity,
    effectId: effectId,
    amplifier: inst.getAmplifier(),
    duration: inst.getDuration(),
    ambient: ambient,
    showParticles: showParticles,
    showIcon: showIcon,
    raw: inst
  }

  let listeners = global.PlayerEffects._addedListeners
  for (let i = 0; i < listeners.length; i++) {
    try {
      listeners[i](payload, e)
    } catch (err) {
      //console.log('[PlayerEffects.onAdded] listener error: ' + err)
    }
  }
})