import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import es from './utils/lang/es';
import en from './utils/lang/en'
import i18n from './utils/i18n';

//vuestic elems
import { VuesticPlugin } from 'vuestic-ui';
import 'vuestic-ui/dist/vuestic-ui.css'

//importamos tailwindcss
import './styles/app.css';
console.log('es', es)
console.log('en', en)

const app = createApp(App);

app.use(store)
app.use(router)
app.use(VuesticPlugin)
app.use(i18n)
app.mount('#app');
