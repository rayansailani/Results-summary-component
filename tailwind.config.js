/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Hanken Grotesk', 'sans-serif']
    },
  },
  base: {
    'body': {
      fontFamily: 'sans',
    },
  },
  plugins: [],
}
