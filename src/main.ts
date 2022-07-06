import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18nConfig } from './modules/i18n'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { router } from './routes'

const app = createApp(App)
app.use(i18nConfig)
app.use(createPinia())
app.use(router)
app.mount('#app')
