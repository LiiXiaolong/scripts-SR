
/**
 * let SDM_TO_SUPERIOR_FLAG = 'sdm_to_superior_shop_currency_v1_done'
let SDM_CURRENCY_ID = 'basic_money'
let SDM_TO_SUPERIOR_DELAY_TICKS = 5

let sdmMigrationBridgeState = 'uninitialized'
let SdmCurrencyHelper = null
let SdmPlayerMoneyData = null
let SuperiorShopMod = null

function wholeCoins(rawValue) {
  let numericValue = Number(rawValue)
  if (!isFinite(numericValue)) return 0
  return Math.max(0, Math.floor(numericValue))
}

function loadSdmMigrationBridge() {
  if (sdmMigrationBridgeState === 'ready') return true
  if (sdmMigrationBridgeState === 'failed') return false

  try {
    SdmCurrencyHelper = Java.loadClass('net.sixik.sdm_economy.api.CurrencyHelper')
    SdmPlayerMoneyData = Java.loadClass('net.sixik.sdm_economy.adv.PlayerMoneyData')
    SuperiorShopMod = Java.loadClass('com.superior.shop.SuperiorShopMod')
    sdmMigrationBridgeState = 'ready'
    console.info('[sdm_currency_transfer] Migration bridge loaded')
    return true
  } catch (err) {
    sdmMigrationBridgeState = 'failed'
    console.error('[sdm_currency_transfer] Failed to load SDM/Superior Shop migration classes')
    console.error(String(err))
    return false
  }
}

PlayerEvents.loggedIn(event => {
  let playerId = event.player && event.player.uuid
  if (!playerId) {
    console.error('[sdm_currency_transfer] loggedIn event did not provide a player uuid')
    return
  }

  // SDM Economy initializes player money on login. Wait a few ticks so the
  // legacy balance is fully available before we read or clear it.
  Utils.server.scheduleInTicks(SDM_TO_SUPERIOR_DELAY_TICKS, () => {
    let player = event.server.getPlayer(playerId)
    if (!player) return

    //if (player.persistentData.getBoolean(SDM_TO_SUPERIOR_FLAG)) return
    if (!loadSdmMigrationBridge()) return

    let legacyAmount = 0
    try {
      legacyAmount = wholeCoins(SdmCurrencyHelper.getMoney(player, SDM_CURRENCY_ID))
    } catch (err) {
      console.error(`[sdm_currency_transfer] Failed to read SDM balance for ${player.username}`)
      console.error(String(err))
      return
    }

    if (legacyAmount <= 0) {
      player.persistentData.putBoolean(SDM_TO_SUPERIOR_FLAG, true)
      return
    }

    let superiorBalanceBefore = 0
    try {
      superiorBalanceBefore = wholeCoins(SuperiorShopMod.get().balance(player))
    } catch (err) {
      console.error(`[sdm_currency_transfer] Failed to read Superior Shop balance before migration for ${player.username}`)
      console.error(String(err))
      return
    }

    // Use the KubeJS binding so the live jar follows its own balance update
    // flow and immediately syncs the client-side shop UI.
    //player.tell(`[Superior Shop] Migrating ${legacyAmount} SDM currency to Superior Shop coins...`)
    SuperiorShop.grant(player, legacyAmount, 'superior_live:sdm_currency_transfer')

    let superiorBalanceAfter = 0
    try {
      superiorBalanceAfter = wholeCoins(SuperiorShopMod.get().balance(player))
    } catch (err) {
      console.error(`[sdm_currency_transfer] Failed to read Superior Shop balance after migration for ${player.username}`)
      console.error(String(err))
      return
    }

    let expectedSuperiorBalance = superiorBalanceBefore + legacyAmount
    if (superiorBalanceAfter < expectedSuperiorBalance) {
      console.error(
        `[sdm_currency_transfer] Superior Shop add command did not apply the expected balance increase for ${player.username}. ` +
        `before=${superiorBalanceBefore}, added=${legacyAmount}, after=${superiorBalanceAfter}, expected_at_least=${expectedSuperiorBalance}`
      )
      return
    }

    try {
      // Force an immediate save so the transfer is not waiting on normal
      // shutdown/save timing to persist the new Superior Shop balance.
      SuperiorShopMod.get().getInternalBalanceProvider().save()
    } catch (err) {
      console.error(`[sdm_currency_transfer] Failed to save Superior Shop balances after migration for ${player.username}`)
      console.error(String(err))
      return
    }

    try {
      // Only clear the legacy balance after the Superior Shop add has been
      // verified and saved.
      SdmCurrencyHelper.setMoney(player, SDM_CURRENCY_ID, 0)
      SdmPlayerMoneyData.savePlayer(player.getUuid(), player.server)
    } catch (err) {
      console.error(`[sdm_currency_transfer] Failed to clear and save SDM balance for ${player.username}`)
      console.error(String(err))
      return
    }

    player.persistentData.putBoolean(SDM_TO_SUPERIOR_FLAG, true)
    //player.tell(`[Superior Shop] Migrated ${legacyAmount} SDM currency into Superior Shop coins.`)
    console.info(`[sdm_currency_transfer] Migrated ${legacyAmount} SDM currency for ${player.username}`)
  })
})

 * 
 * 
 * 
 */
