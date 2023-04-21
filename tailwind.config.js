/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
  ],
  theme: {
      extend: {
        color:{
          backgroundImage: {
            'bannerhome': "url('src/assets/images/Imagesbannerhome.png')",
            
          }        }
      }
  },
  variants: {},
  plugins: []
}
