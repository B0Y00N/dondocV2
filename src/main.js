import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueGtag from 'vue-gtag-next'
import router from './router/index.js'
import App from './App.vue'
import './style.css'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)

if (import.meta.env.PROD && import.meta.env.VITE_GA_ID) {
  app.use(
    VueGtag,
    {
      property: {
        id: import.meta.env.VITE_GA_ID,
      },
    },
    router,
  )
}

app.mount('#app')
