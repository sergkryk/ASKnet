import { createApp } from 'vue';
import App from '@/App.vue'

// import routes from routes.js //
import routes from '@/routes/routes';
import store from '@/store/index';
//import css styles //
import '@/sass/main.scss';

import BaseCard from '@/components/ui/BaseCard.vue';
import BaseModal from '@/components/ui/BaseModal.vue';
import ButtonClose from '@/components/ui/ButtonClose.vue';

const app  = createApp(App)

// imports global components
app.component('base-card', BaseCard);
app.component('base-modal', BaseModal);
app.component('button-close', ButtonClose);

app.use(store);
app.use(routes);
app.mount('#app');
