module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Covid-update/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}