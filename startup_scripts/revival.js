
const CommandSourceStack = Java.loadClass('net.minecraft.commands.CommandSourceStack')
const HardcoreRevival = Java.loadClass('net.blay09.mods.hardcorerevival.HardcoreRevival')

/**
 * 
 * @param {*} player The player to revive
 * @param {*} skipEffects Effects that the mod applies by default
 * @returns 
 */
global.revivePlayer = function (player, skipEffects) {
  // player fallback who ran command
  if (!player) {
    const ctx = global.event?.server
    if (ctx instanceof CommandSourceStack) {
      player = ctx.getPlayer()
    }
    if (!player) {
      console.warn('[revivePlayer] No player context!')
      return
    }
  }

  const manager = HardcoreRevival.getManager()

  manager.wakeup(player, !skipEffects)
}




global.needsRevive = function (player) {
  // player fallback who ran the command
  if (!player) {
    const ctx = global.event?.server
    if (ctx instanceof CommandSourceStack) {
      player = ctx.getPlayer()
    }
    if (!player) {
      console.warn('[needsRevive] No player context!')
      return false
    }
  }

  return HardcoreRevival.getRevivalData(player).isKnockedOut()
}

