export default {
  install(app, options) {
    let current = 'en'

    const changeLanguage = name => current = name

    app.config.globalProperties.$i18n = key => {
      return key.split('.').reduce((words, idx) => {
        return words[idx] || '=== UNKNOWN ==='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}
