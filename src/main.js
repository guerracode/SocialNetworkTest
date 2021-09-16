import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BaseCard from './components/atoms/BaseCard.vue';
import BaseButton from './components/atoms/BaseButton.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app
  .use(store)
  .use(router)
  .mount('#app');
