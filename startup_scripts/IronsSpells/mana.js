global.getPlayerMaxMana = (player) => player.getAttributeValue(AttributeRegistry.MAX_MANA.get())

global.changePlayerMana = (player, delta) => {
  let data = isbMagicData(player)
  let maxMana = global.getPlayerMaxMana(player)
  let newMana = Math.max(0, Math.min(data.getMana() + delta, maxMana))
  //player.tell(newMana)
  global.setPlayerMana(player, newMana)
  let sync = true
  if (sync) PacketDistributor.sendToPlayer(player, new SyncManaPacket(data))
  return data.getMana()
}





/**
 * 
 * @param {*} player 
 * @param {*} manaToCheckAndChange The amount of mana you are checking and want to change
 * @returns Boolean. Its implied that if you are checking mana then you are subtracting it. No reason to check if you are adding mana.
 */
global.manaCheckAndSet = (player, manaToCheckAndChange) => {
    if (global.getPlayerMana(player) < manaToCheckAndChange) {
        return false
    } 

    let mod = -1
    global.changePlayerMana(player, mod * manaToCheckAndChange)
    return true
}



// 1) returns the player's mana
global.getPlayerMana = (player) => isbMagicData(player).getMana()

// 2) changes a player's mana (set + add variants; returns new mana)
global.setPlayerMana = (player, mana) => {
  let data = isbMagicData(player)
  data.setMana(mana)
  let sync = true
  if (sync) PacketDistributor.sendToPlayer(player, new SyncManaPacket(data))
  return data.getMana()
}
global.addPlayerMana = (player, delta) => {
  let data = isbMagicData(player)
  data.addMana(delta)
  let sync = true
  if (sync) PacketDistributor.sendToPlayer(player, new SyncManaPacket(data))
  return data.getMana()
}
