module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/styles/scss/main.scss";'
      }
    }
  },
  lintOnSave: false
}
