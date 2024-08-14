
module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F5F5F5',
        'custom-customer-text-color' : '#2F80ED',
        'custom-customer-position-color' : '#8F8F8F',
        'custom-color' : '#696969',
        'custom-customer-bg-color' : '#E1E9F4',
        'search-container-color' : '#EEF2F7',
        'custom-grey2' : '#F8F8F8',
        'custom-color2' : '#CAC3D2'

      },
      width : {
        'custom-side-bar-width' : '450px',
        'custom-width' : '95%',
        'custom-width2' : '96%',
      },
      height :{
        'custom-table-container' : '905px',
        'custom-table-container2' : '820px',

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
        'custom-font-size2' : '14px',
        'custom-font-size3' : '16px',
      },
      borderRadius :{
        'custom-border-radius' : '50px',
      },
      border:{
        'custom-size' : "1px",
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}