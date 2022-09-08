import { createApp } from 'vue'
import store from './store'
import router from "./router";
import moment from 'moment';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

moment.locale('es');


const app = createApp(App);
app.config.globalProperties.moment = moment;

app.use(ElementPlus)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
  
import "bootstrap/dist/js/bootstrap.js"
