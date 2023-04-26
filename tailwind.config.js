/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
  ],
  theme: {
      extend: {
        screens: {
          'xsm': {'min': '320px', 'max': '767px'},
          'md': {'min': '768px', 'max': '2560px'},
          // 'xh': {'min': '1025px', 'max': '5000px'}
        },
        color:{
          backgroundImage: {
            'bannerhome': "url('src/assets/images/Imagesbannerhome.png')",
            
          }        }
      
  }
},
  variants: {},
  plugins: []
}
