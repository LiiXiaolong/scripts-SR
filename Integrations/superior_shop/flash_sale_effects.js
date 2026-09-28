const MOTHERLODE_RUSH_ID = 'flash_motherlode_rush'
const HARVEST_FEAST_ID = 'flash_harvest_feast'
const MOTHERLODE_MARKER = 'motherlode_rush'
const MOTHERLODE_USES_KEY = 'kjs_motherlode_uses'
const FLASH_SALE_KEY = 'kjs_flash_sale'

function ensureItemNbt(item) {
  if (!item) return null
  item.nbt = item.nbt || {}
  return item.nbt
}

function getItemFlashSale(item) {
  const nbt = item && item.nbt ? item.nbt : null
  if (!nbt || nbt[FLASH_SALE_KEY] == null) return ''
  return String(nbt[FLASH_SALE_KEY])
}

function clearMotherlodeMarker(item) {
  const nbt = item && item.nbt ? item.nbt : null
  if (!nbt) return

  try {
    if (typeof nbt.remove === 'function') {
      nbt.remove(FLASH_SALE_KEY)
      nbt.remove(MOTHERLODE_USES_KEY)
      return
    }
  } catch (e) {}

  delete nbt[FLASH_SALE_KEY]
  delete nbt[MOTHERLODE_USES_KEY]
}

function isJackpotOre(blockId) {
  if (!blockId) return false
  return blockId.includes('ore') || blockId === 'minecraft:ancient_debris'
}

BlockEvents.broken(event => {
  const player = event.player
  if (!player) return

  const held = player.mainHandItem
  if (!held || getItemFlashSale(held) !== MOTHERLODE_MARKER) return

  const nbt = ensureItemNbt(held)
  let usesLeft = Number(nbt && nbt[MOTHERLODE_USES_KEY] != null ? nbt[MOTHERLODE_USES_KEY] : 0)
  if (usesLeft <= 0) {
    clearMotherlodeMarker(held)
    return
  }

  usesLeft -= 1

  if (isJackpotOre(event.block.id) && Math.random() < 0.25) {
    event.block.popItem(event.block.id)
  }

  if (usesLeft <= 0) {
    clearMotherlodeMarker(held)
    return
  }

  try {
    if (typeof nbt.putInt === 'function') {
      nbt.putInt(MOTHERLODE_USES_KEY, usesLeft)
    } else {
      nbt[MOTHERLODE_USES_KEY] = usesLeft
    }
  } catch (e) {
    nbt[MOTHERLODE_USES_KEY] = usesLeft
  }
})

ItemEvents.foodEaten(event => {
  if (!SuperiorShop.isSaleActive(HARVEST_FEAST_ID)) return

  const entity = typeof event.getEntity === 'function' ? event.getEntity() : event.entity
  if (!entity || !entity.potionEffects) return

  entity.potionEffects.add('minecraft:absorption', 20 * 20, 0, false, true)
  entity.potionEffects.add('minecraft:saturation', 20, 0, false, false)
})
