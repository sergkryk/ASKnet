import { createApp } from 'vue';
import App from '@/App.vue'
// import routes from routes.js //
import routes from './routes';
//import css styles //
import '@/scss/main.scss'

const app  = createApp(App)
app.use(routes);
app.mount('#app');
