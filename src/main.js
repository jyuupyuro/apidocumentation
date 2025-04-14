import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
// Import Bootstrap and BootstrapVue 3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import BootstrapVue3 from 'bootstrap-vue-3';
// Import fontawesome Icons
import './assets/fontawesome/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// Import the PT Serif font definitions
import './assets/fonts/PT_Serif.css';
import router from './router'
// Import your custom styles
import './assets/styles/main.scss';

const app = createApp(App);
app.use (router);
app.use(BootstrapVue3);
app.mount('#app');
