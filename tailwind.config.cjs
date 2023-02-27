/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    colors:{
      'negro': '#4a4a4a',
      'white':'#ffffff',
      'orange':'#FE461E',
      'griso':'#3d3d3d',
      'verde':'#3FC90B'
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '810px'},
      // => @media (max-width: 639px) { ... }
    }
    
  },
  plugins: [],
}
