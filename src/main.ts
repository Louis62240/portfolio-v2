import { createApp } from "vue"
import { createPinia } from "pinia"
import router from './router/index'
import App from "./App.vue"
import "./assets/style.css"
import { createI18n } from 'vue-i18n'
// @ts-ignore
import messages from './locales'

const i18n = createI18n({
	legacy: false,
	locale: 'fr', // langue par défaut
	fallbackLocale: 'en',
	messages
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount("#app")
