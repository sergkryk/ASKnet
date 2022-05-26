import { createApp } from 'vue';
import App from '@/App.vue'
// import routes from routes.js //
import routes from '@/routes/routes';
import store from '@/store/index';
//import css styles //
import '@/sass/main.scss'

const app  = createApp(App)
app.use(store);
app.use(routes);
app.mount('#app');
