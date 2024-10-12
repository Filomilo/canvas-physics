import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SpeedDial from 'primevue/speeddial'
import Noir from './presets/Noir'

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false
    }
  }
})

app.component('SpeedDial', SpeedDial)
import PrimeVue from 'primevue/config'
// import Noir from './presets/Noir.js'

app.mount('#app')
