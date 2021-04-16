import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import '@/assets/styles/scss/main.scss'
import router from './router'
import store from './store'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
