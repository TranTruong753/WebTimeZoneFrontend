import { createI18n } from 'vue-i18n'
import en from '@/language/en.json'
import vi from '@/language/vi.json'

const config = localStorage.getItem('config') || '';
const language = config?JSON.parse(config).config.lang: 'en'
console.log('lang:',language)


const i18n = createI18n({
  legacy: false, // Sử dụng API Composition
  locale: language, // Ngôn ngữ mặc định
  fallbackLocale: 'en', // Ngôn ngữ dự phòng
  messages: { en, vi }, // Các tệp ngôn ngữ
})

export default i18n
