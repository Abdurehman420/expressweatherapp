/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: ["./public/**/*.{html,js}",
//   "./views/*"
// ],
  content: ["./templates/views/*"  , "./templates/partials/*"],
  
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        sans : ['Roboto' , 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss')
  ],
}
