import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import '@/assets/styles/scss/main.scss'
import router from './router'
import store from './store'
import {ru} from './locales/ru'
import {en} from './locales/en'
import localizationPlugin from './plugins/localizationPlugin'


const app = createApp(App)
app.use(localizationPlugin, {ru, en})
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
