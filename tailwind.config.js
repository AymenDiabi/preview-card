/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        slightWhite: 'hsla(0, 0%, 100%, 0.75)',
        slightWhite2: 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}
