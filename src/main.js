import { createApp } from 'vue'
import PrimeVue from 'primevue/config';


import App from './App.vue'

const app = createApp(App);
app.config.globalProperties.TWA = window.Telegram.WebApp;
app.use(PrimeVue);

app.mount('#app')
