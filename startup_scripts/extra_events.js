ForgeEvents.onEvent('net.minecraftforge.event.entity.living.ShieldBlockEvent', event => {
    global.onShieldBlock(event)
})
/**
 * 
 * @param {Internal.ShieldBlockEvent} event 
 */
global.onShieldBlock = event => {
    let { blockedDamage, damageSource, entity, originalBlockedDamage } = event
    event.setShieldTakesDamage(false)
    //console.log(blockedDamage)
}



ForgeEvents.onEvent("com.alrex.parcool.api.unstable.action.ParCoolActionEvent$StartEvent", event => {
    let { player } = event
    if (!player) return
    player.persistentData.putBoolean("parcool:just_stopped", true)
})
