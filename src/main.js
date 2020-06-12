import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';
import axios from 'axios';
// import VueGeolocation from 'vue-browser-geolocation';
// import moment from "moment";
import VueRouter from 'vue-router'
import store from './store/store.js'
import {routes} from './routes.js'


axios.defaults.baseURL = "https://api.covid19api.com/"
Vue.use(Vuex);
Vue.use(VueRouter);
// Vue.use(VueGeolocation);

Vue.config.productionTip = false;
import "@/assets/style.css";

Vue.filter('numberformat',(num) =>{
  // return num
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
})

const router = new VueRouter({
  mode : 'history',
  routes
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
