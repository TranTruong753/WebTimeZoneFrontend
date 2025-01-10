import './assets/main.css'

import { createApp } from 'vue'
import i18n from '@/language/i18n'
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(i18n)
app.mount('#app')
