module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: {
        default: '#FF0054',
        hover: '#E6003B',
        active: '#CC0021'
      },
      blue: {
        default: '#0A344F',
        hover: '#001B36',
        active: '#0A344F'
      },
      white: {
        default: '#ffffff'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
