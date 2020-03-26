import Vue from 'vue';
import Notifications from 'vue-notification';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(Notifications);

Vue.mixin({
  methods: {
    globalFormatCurrency(value, locales = 'es-US', currency = 'USD') {
      const options = { style: 'currency', currency };
      return new Intl.NumberFormat(locales, options).format(value);
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
