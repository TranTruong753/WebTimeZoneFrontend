import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import plugin from 'pinia-plugin-persistedstate';
import i18n from '@/language/i18n'
import Antd from 'ant-design-vue';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(plugin)
app.use(pinia)
app.use(router)
app.use(Antd)
app.use(i18n)
app.mount('#app')
