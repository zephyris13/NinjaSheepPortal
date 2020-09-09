import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firebase, auth } from './firebase'
import './assets/scss/app.scss'

Vue.config.productionTip = false

let app

function checkFirebase () {
  console.log('Checking if Firebase has loaded...');
  if (!firebase.app()) {
    setInterval(checkFirebase(), 1000);
  }
}
  
checkFirebase();
console.log('Firebase loaded!');

auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
});