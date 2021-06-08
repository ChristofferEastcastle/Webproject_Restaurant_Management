module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'welcome-screen': "url('../images/pizza_6.jpg')",
      }),
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat',]
    },
    extend: {},
  
  variants: {
    extend: {},
  },
  plugins: [],
}
}
