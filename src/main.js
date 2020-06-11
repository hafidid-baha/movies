import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;
Vue.use(VueCarousel);
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  error: require('./assets/back.jpg'),
  // error: 'https://images.unsplash.com/photo-1586253126230-ecf6ef03d599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  // loading: 'dist/loading.gif',
  loading: require('./assets/loader.gif'),
  attempt: 1
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
