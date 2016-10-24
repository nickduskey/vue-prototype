/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Triggers from './components/Triggers.vue';
//comment
Vue.use(VueRouter);

const routes = [
  { path: '/triggers', component: Triggers }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
