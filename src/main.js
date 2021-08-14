// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from '@/plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueMoment from 'vue-moment'

import common from '@/assets/js/commonUtil'
import api from '@/assets/js/apiUtil'
import '@/assets/scss/main.scss'

Vue.use(VueMoment);

Vue.prototype.$common = common;
Vue.prototype.$api = api;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>',
})
