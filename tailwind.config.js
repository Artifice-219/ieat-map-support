/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "my-image": "url(/frontend/assets/images/map.png)",
      }
    },
    screens: {
      'mb-s': '320px',
      'mb-m': '375px',
      'mb-l': '425px',
      'tablet': '768px',       // => @media (min-width: 768px) { ... }
      'laptop': '1024px',   // => @media (min-width: 1024px) { ... }
      'desktop': '1440px',  // => @media (min-width: 1440px) { ... }
    },

  },
  plugins: [],

  
}