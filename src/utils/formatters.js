export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max)

export const formatNumber = (value) =>
  new Intl.NumberFormat('en', { notation: value > 9999 ? 'compact' : 'standard' }).format(value)

export const getLevelFromXp = (xp = 0) => Math.floor(xp / 100) + 1

export const getLevelProgress = (xp = 0) => {
  const currentLevelXp = xp % 100
  return {
    level: getLevelFromXp(xp),
    currentLevelXp,
    needed: 100 - currentLevelXp,
    percent: clamp(currentLevelXp),
  }
}

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const todayKey = (date = new Date()) => date.toISOString().slice(0, 10)
