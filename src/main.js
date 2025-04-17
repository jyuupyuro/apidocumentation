// 🌗 Theme pre-setup (before Vue runs)
const savedTheme = localStorage.getItem('theme');
document.documentElement.classList.add(savedTheme === 'dark' ? 'dark' : 'light');

import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

// Bootstrap + Font Awesome
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import BootstrapVue3 from 'bootstrap-vue-3';
import './assets/fontawesome/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Custom styles + router
import router from './router';
import './assets/styles/main.scss';

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.mount('#app');
