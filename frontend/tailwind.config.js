module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#34CB79"
        }
      },
      backgroundImage: theme => ({
        'header-texture': "url('/icons/navbar.svg')"
      })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
};
