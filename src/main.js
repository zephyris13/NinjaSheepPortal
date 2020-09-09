import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firebase, auth } from './firebase'
import './assets/scss/app.scss'

Vue.config.productionTip = false

let app
if (firebase.app()) {
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
}
