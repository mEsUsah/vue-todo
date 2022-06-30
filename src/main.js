import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);
app.component(App);
app.component(BaseCard);
app.mount('#app');
