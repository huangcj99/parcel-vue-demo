import Vue from 'vue'
import router from './router';
import './assets/css/reset.css'
import App from './app.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
