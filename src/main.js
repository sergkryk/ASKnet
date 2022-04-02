import { createApp } from 'vue';
import App from '@/App.vue'
// import routes from routes.js //
import routes from './routes';
//import css styles //
import '@/sass/main.scss'

const app  = createApp(App)
app.use(routes);
app.mount('#app');
