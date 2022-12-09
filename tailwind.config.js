module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
        colors: {
          'default': 'rgb(12, 116, 137)',
          'bg': 'rgb(10 20 30)',
          'blue': 'rgb(2 132 199)',
          'grn': 'rgb(17, 157, 164)',
          'darkgn': 'rgb(12, 116, 137)',
          'darkergn': 'rgb(19, 80, 91)',
          'wh': 'rgb(215, 217, 206)'

    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
],
}
