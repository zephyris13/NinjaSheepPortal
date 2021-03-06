import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPerformingRequest(state, val) {
      state.performingRequest = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password);

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);

      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        email: form.email
      });

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
    async signupGoogle({ dispatch }) {
      var provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await fb.auth.signInWithPopup(provider);

      console.log(user);

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      console.log('User Profile');
      console.log(userProfile);
      // set user profile in state
      commit('setUserProfile', userProfile.data());

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/');
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit('setUserProfile', {});

      // redirect to login view
      router.push('/login');
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name
      });

      dispatch('fetchUserProfile', { uid: userId });
    }
  }
})

export default store
