import { createApp } from 'vue'
import { pinia } from './modules/pinia'
import { i18nConfig } from './modules/i18n'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.scss'
import { router } from './router'

const app = createApp(App)
app.use(i18nConfig)
app.use(pinia)
app.use(router)
app.use(IonicVue)

router.isReady().then(() => {
  app.mount('#app')
})
