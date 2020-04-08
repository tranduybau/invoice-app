import Vue from 'vue';
import Notifications from 'vue-notification';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/tailwind.css';
import '@/interception';

// function: Use firebase:
const config = {
  apiKey: 'AIzaSyApiiF3U_eR1SrxIvIRx6MTGfLmG7wO1-g',
  authDomain: 'bauer-web-blog.firebaseapp.com',
  databaseURL: 'https://bauer-web-blog.firebaseio.com',
  projectId: 'bauer-web-blog',
  storageBucket: 'bauer-web-blog.appspot.com',
  messagingSenderId: '192792860070',
  appId: '1:192792860070:web:ffd11794085dd7ff5d6b67',
  measurementId: 'G-3JW2QXRSEM',
};
firebase.initializeApp(config);
firebase.analytics();

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
