const plugin = require('tailwindcss/plugin')
const Color = require('color')

const flattenColorPalette = (colors) =>
  Object.assign(
    colors[500] ? { DEFAULT: colors[500] } : {},
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  )

module.exports = plugin.withOptions(
  (options = {}) => {
    return ({ addBase }) => {
      const { themes } = options

      const stylesToAdd = Object.entries(themes).reduce((cssClasses, [themeName, theme]) => {
        const styles = {}

        Object.entries(flattenColorPalette(theme)).forEach(
          ([color, hex]) => hex && (styles['--color-' + color] = Color(hex).rgb().array().join(' '))
        )

        const cssSelector = themeName === 'default' ? 'html' : `.${themeName}`
        cssClasses[cssSelector] = styles

        return cssClasses
      }, {})

      addBase(stylesToAdd)
    }
  },

  function (options = {}) {
    const { themes } = options

    const colors = Object.values(themes).reduce((variables, theme) => {
      Object.keys(flattenColorPalette(theme)).forEach(
        (rule) => (variables[rule] = `rgb(var(--color-${rule}) / <alpha-value>)`)
      )
      return variables
    }, {})

    return {
      theme: {
        extend: {
          colors: {
            ...colors,
          },
        },
      },
    }
  }
)
