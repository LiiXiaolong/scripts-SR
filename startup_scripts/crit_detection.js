// kubejs/server_scripts/crit_helper.js
// Forge 1.20.1 + KubeJS 6.x

// --- Java hooks we need
const EventResult = Java.loadClass('net.minecraftforge.eventbus.api.Event$Result');

// -----------------------------------------------------------------------------
// Public API you can call from anywhere in your scripts
// -----------------------------------------------------------------------------

/**
 * Force the player's *next* melee hit to be a critical.
 * @param {Internal.Player} player
 * @param {number} [modifier] Damage multiplier applied to the base damage on crit (vanilla is 1.5)
 



*/
global.forceNextCrit = function (player, modifier) {
  if (!player) return;
  if (!modifier) modifier = 1.5;
  const pd = player.persistentData;
  pd.kjs_forceCrit = true;
  pd.kjs_forceCritMod = Math.max(0, modifier);
};

/**
 * Returns whether the player's *most recent* attempted melee hit was critical.
 * This flag is updated by CriticalHitEvent and also mirrored during SuperiorEvents.hurtThrottled.
 * @param {Internal.Player} player
 * @param {boolean} [consume=false] If true, clears the flag after reading.
 */
global.wasLastHitCritical = function (player, consume) {
  if (!player) return false;
  if (!consume) consume = false;
  const pd = player.persistentData;
  const val = !!pd.kjs_lastCrit;
  //player.tell(`wasLastHitCritical: ${val} (consume=${consume})`);
  if (consume) pd.kjs_lastCrit = false;
  return val;
};

// -----------------------------------------------------------------------------
// 1) CriticalHitEvent: decide/override crits + record result
// -----------------------------------------------------------------------------
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.CriticalHitEvent', event => {
  const player = event.entity;     // attacker (Player)
  const target = event.target;     // attacked entity
  if (!player || !target) return;
  player.persistentData.putBoolean('lastHitWasCrit', event.isVanillaCritical());

});