import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createHead } from 'unhead'

// Create a global head instance
createHead()

createApp(App).use(router).mount('#app')
