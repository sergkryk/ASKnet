import { createApp } from 'vue';
import App from '@/App.vue'
// import routes from routes.js //
import routes from '@/routes/routes';
import store from '@/store/index';
//import css styles //
import '@/sass/main.scss';

import BaseCard from '@/components/ui/BaseCard.vue';

const app  = createApp(App)

app.component('base-card', BaseCard);

app.use(store);
app.use(routes);
app.mount('#app');
