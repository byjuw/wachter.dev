// handle theme change requested by user
document.querySelector('.theme').addEventListener('click', () => {
  // Generate a new random hue.
  const currentHue = getComputedStyle(document.documentElement).getPropertyValue('--hue-primary') ?? 190
  const genHue = () => {
    const hue = Math.floor(Math.random() * 360)

    // At least a difference of 30° from current Hue. If not, regenerate a new one
    return Math.abs(hue - currentHue) < 30 ? genHue() : hue
  }

  const newHue = genHue()

  // Update favicon
  const favicon = document.querySelector('link[rel="icon"]')
  favicon.href = favicon.href.replace(`hsl(${Number(currentHue)}`, `hsl(${newHue}`)

  // Update CSS variable used for the theme
  document.documentElement.style.setProperty('--hue-primary', String(newHue))
})
