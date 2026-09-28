const SHOP_FLASH_SALES = {
  flash_orb_meltdown: {
    durationSeconds: 120,
    message: 'Orb Meltdown: 70% off all Orbs for 2 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_orb_meltdown', rule => rule.buyCurrencyMultiplier(0.30))
    },
  },

  flash_motherlode_rush: {
    durationSeconds: 120,
    message: 'Motherlode Rush: 50% off Mining tools for 2 minutes! Purchased tools can jackpot ore drops.',
    apply(sale) {
      sale.message(this.message)
      sale.affectCategory('mining', rule => {
        rule.buyCurrencyMultiplier(0.50)
        rule.rewardItemNbtMerge('{kjs_flash_sale:"motherlode_rush",kjs_motherlode_uses:256}')
      })
    },
  },

  flash_harvest_feast: {
    durationSeconds: 90,
    message: 'Harvest Feast: 75% off shop food for 90 seconds! All food grants bonus nourishment while the sale is active.',
    apply(sale) {
      sale.message(this.message)
      sale.affectCategory('food', rule => rule.buyCurrencyMultiplier(0.25))
    },
  },

  flash_curio_overflow: {
    durationSeconds: 120,
    message: 'Curio Overflow: 50% off Curios Slots for 2 minutes! Purchased expansions have a 20% chance to grant 2 slots.',
    apply(sale) {
      sale.message(this.message)
      sale.affectCategory('curios_slots', rule => {
        rule.buyCurrencyMultiplier(0.50)
        rule.rewardItemNbtMerge('{kjs_flash_sale:"curio_overflow"}')
      })
    },
  },

  flash_pocket_storage: {
    durationSeconds: 180,
    message: 'Pocket Storage: Backpacks are 50% off, upgrades are 10% off, and upgrades have a 25% chance to be free for 3 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_pocket_storage_backpacks', rule => rule.buyCurrencyMultiplier(0.50))
      sale.affectEntryTag('flash_pocket_storage_upgrades', rule => rule.buyCurrencyMultiplier(0.90))
    },
  },

  flash_inventory_breach: {
    durationSeconds: 90,
    message: 'Inventory Breach: 50% off Inventory Upgrades for 90 seconds!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_inventory_breach', rule => rule.buyCurrencyMultiplier(0.50))
    },
  },

  flash_arcane_liquidation: {
    durationSeconds: 240,
    message: 'Arcane Liquidation: 55% off Arcane Consumables for 4 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_arcane_liquidation', rule => rule.buyCurrencyMultiplier(0.45))
    },
  },

  flash_factory_clearance: {
    durationSeconds: 300,
    message: 'Factory Clearance: 50% off CREATE gear for 5 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_factory_clearance', rule => rule.buyCurrencyMultiplier(0.50))
    },
  },

  flash_hunters_window: {
    durationSeconds: 120,
    message: 'Hunter\'s Window: 75% off Arrows for 2 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_hunters_window', rule => rule.buyCurrencyMultiplier(0.25))
    },
  },

  flash_abyssal_buyback: {
    durationSeconds: 180,
    message: 'Abyssal Buyback: Sea Creatures sell for 2x base price for 3 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_abyssal_buyback', rule => rule.sellCurrencyExpr('base * 2.0'))
    },
  },

  flash_seed_gold_rush: {
    durationSeconds: 120,
    message: 'Seed Gold Rush: Seeds sell for 2.5x base price for 2 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_seed_gold_rush', rule => rule.sellCurrencyExpr('base * 2.5'))
    },
  },

  flash_chaos_coupon: {
    durationSeconds: 120,
    message: 'Chaos Coupon: 60% off Gameplay Modifiers for 2 minutes!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_chaos_coupon', rule => rule.buyCurrencyMultiplier(0.40))
    },
  },

  flash_lootbox_jackpot: {
    durationSeconds: 60,
    message: 'Loot Box Jackpot: 50% off Loot Boxes with 50% better rolls for 1 minute!',
    apply(sale) {
      sale.message(this.message)
      sale.affectEntryTag('flash_lootbox_jackpot', rule => rule.buyCurrencyMultiplier(0.50))
    },
  },
}

const SHOP_FLASH_SALE_IDS = Object.freeze(Object.keys(SHOP_FLASH_SALES))

function activeShopFlashSaleIds() {
  return SHOP_FLASH_SALE_IDS.filter(id => SuperiorShop.isSaleActive(id))
}

function stopAllShopFlashSales(exceptId) {
  SHOP_FLASH_SALE_IDS.forEach(id => {
    if (id !== exceptId && SuperiorShop.isSaleActive(id)) {
      SuperiorShop.stopSale(id)
    }
  })
}

function broadcastFlashSaleMessage(message) {
  if (!message) return
  try {
    Utils.server.tell(Text.gold(`[Flash Sale] ${message}`))
  } catch (e) {}
}

function startShopFlashSale(id) {
  const saleDef = SHOP_FLASH_SALES[id]
  if (!saleDef) {
    return { ok: false, message: `Unknown flash sale: ${id}` }
  }

  if (SuperiorShop.isSaleActive(id)) {
    return { ok: false, message: `${id} is already active.` }
  }

  stopAllShopFlashSales(id)
  SuperiorShop.startSale(id, saleDef.durationSeconds, sale => saleDef.apply(sale))
  broadcastFlashSaleMessage(saleDef.message)
  return { ok: true, message: `Started ${id} for ${saleDef.durationSeconds} seconds.` }
}

function stopShopFlashSale(id) {
  if (!SHOP_FLASH_SALES[id]) {
    return { ok: false, message: `Unknown flash sale: ${id}` }
  }
  if (!SuperiorShop.isSaleActive(id)) {
    return { ok: false, message: `${id} is not active.` }
  }

  SuperiorShop.stopSale(id)
  return { ok: true, message: `Stopped ${id}.` }
}

function stopEveryShopFlashSale() {
  let stopped = 0
  SHOP_FLASH_SALE_IDS.forEach(id => {
    if (SuperiorShop.isSaleActive(id)) {
      SuperiorShop.stopSale(id)
      stopped++
    }
  })
  return stopped
}

global.startSuperiorShopFlashSale = startShopFlashSale
global.stopSuperiorShopFlashSale = stopShopFlashSale
global.listSuperiorShopFlashSales = () => SHOP_FLASH_SALE_IDS.slice()

ServerEvents.commandRegistry(event => {
  const { commands: C } = event
  const startNode = C.literal('start')
  const stopNode = C.literal('stop')

  SHOP_FLASH_SALE_IDS.forEach(id => {
    startNode.then(
      C.literal(id)
        .executes(ctx => {
          const player = ctx.source.playerOrException
          const result = startShopFlashSale(id)
          player.tell(result.ok ? Text.green(result.message) : Text.red(result.message))
          return result.ok ? 1 : 0
        })
    )

    stopNode.then(
      C.literal(id)
        .executes(ctx => {
          const player = ctx.source.playerOrException
          const result = stopShopFlashSale(id)
          player.tell(result.ok ? Text.green(result.message) : Text.red(result.message))
          return result.ok ? 1 : 0
        })
    )
  })

  event.register(
    C.literal('shop_flash_sale')
      .requires(source => source.hasPermission(2))
      .then(startNode)
      .then(stopNode)
      .then(
        C.literal('stop_all')
          .executes(ctx => {
            const player = ctx.source.playerOrException
            const stopped = stopEveryShopFlashSale()
            player.tell(stopped > 0 ? Text.green(`Stopped ${stopped} active flash sale(s).`) : Text.gray('No flash sales were active.'))
            return 1
          })
      )
      .then(
        C.literal('active')
          .executes(ctx => {
            const player = ctx.source.playerOrException
            const active = activeShopFlashSaleIds()
            if (active.length === 0) {
              player.tell(Text.gray('No flash sales are active.'))
            } else {
              player.tell(Text.gold(`Active flash sales: ${active.join(', ')}`))
            }
            return 1
          })
      )
      .then(
        C.literal('list')
          .executes(ctx => {
            const player = ctx.source.playerOrException
            player.tell(Text.gold(`Available flash sales: ${SHOP_FLASH_SALE_IDS.join(', ')}`))
            return 1
          })
      )
  )
})
