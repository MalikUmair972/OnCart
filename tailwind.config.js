/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      rotate: {
        '12': '12deg', 
      },
      boxShadow: {
        'text-shadow-xl': '2px 2px 10px rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-xl': {
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', 
        },
      })
    },
     require('@tailwindcss/line-clamp'),
  ],
}
