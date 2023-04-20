/**@type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
  ],
  theme: {
      extend: {
        color:{
          primary:"#4ade80",
          secundary:"#0f766e",
          acento:"#f43f5e"
        }
      }
  },
  variants: {},
  plugins: []
}
