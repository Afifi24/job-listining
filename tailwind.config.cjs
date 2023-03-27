/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
       
      },
      backgroundColor:{
        LightGrayishCyan : 'hsl(180, 29%, 50%)',
        lightbackground : 'hsl(180, 52%, 96%)',
        Light:'hsl(180, 31%, 95%)',
        darkgrayish: 'hsl(180, 8%, 52%)',
        VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        DesaturatedDarkCyan: 'hsl(180, 29%, 50%)',

      },
      colors:{
        darkgreen:'hsl(180, 29%, 50%)',
        darkgrayish: 'hsl(180, 8%, 52%)',
        veryLight:'hsl(180, 31%, 95%)',
        LightGrayish : 'hsl(180, 29%, 50%)',
        VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)',

      },
      fontFamily:{
        LeagueSpartan:['League Spartan'],
      },
      screens:{
        'md':'870px'
      }
      
    },
  },
  plugins: [],
}
