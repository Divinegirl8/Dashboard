
module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F5F5F5',
        'custom-customer-text-color' : '#2F80ED',
        'custom-customer-position-color' : '#8F8F8F'
      },
      width : {
        'custom-side-bar-width' : '450px',
      },
      height :{
        'custom-table-container' : '900px',
      },
      fontFamily:{
        'custom-fonts-family' : '"Poppins", sans-serif',
      },
      fontWeight:{
        'custom-font-weight' : '500',
        'custom-font-weight2' : '400',
      },
      fontStyle:{
        'custom-font-style' : 'normal',
      },
      fontSize: {
        'custom-font-size' : '20px',
        'custom-font-size2' : '14px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}