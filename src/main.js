import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/scss/main.scss'
import router from './router'
import store from './store'
import localizationPlugin from './plugins/localizationPlugin'

const app = createApp(App)


const ru = {
  app: {
    name: 'Игорь Костеневич',
    footerText: 'Связь со мной',
  },
  links: {
    aboutMe: 'Обо мне',
    myWorks: 'Мои работы',
  }
}

const en = {
  app: {
    name: 'Igor Kostenevich',
    footerText: 'Svaz so mnoy',
  },
  links: {
    aboutMe: 'About me',
    myWorks: 'My works'
  }
}


app.use(localizationPlugin, {ru, en})

app.use(store)
app.use(router)
app.mount('#app')
