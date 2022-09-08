/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'luckiestGuy':['Luckiest Guy', 'cursive'],
        'changa':['Changa', 'cursive'],
      },
      colors: {
        'purple':'#622870',
        'accentPurple':'#7F488C',
        'lightPurple':'#9E72A8',
        'darkPurple':'#2D0238',
      }
    },
  },
  plugins: [],
}
