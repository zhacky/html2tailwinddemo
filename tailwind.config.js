/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}","./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
      },
      screens: {
        '40em': '40em', // Custom breakpoint for exactly 40em
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(140deg, rgb(29, 67, 84) 0%, rgba(29, 67, 84, 0.67) calc(100% - 60px), rgba(0, 0, 0, 0) calc(100% - 59px))',
      },
    },
  },
  plugins: [],
}
