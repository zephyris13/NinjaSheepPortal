import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (process.env.VUE_APP_DEVELOPMENT !== undefined) {
  console.log('Development mode');
  
  const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
  }

  firebase.initializeApp(firebaseConfig)
} else {
  fetch('/__/firebase/init.json').then(async response => {
    const firebaseAutoConfig = await response.json();

    firebase.initializeApp(firebaseAutoConfig);
  });
}

var db = {};
var auth = {};
var usersCollection = {};

if (firebase.app()) {
  console.log('Firebase loaded');
  // utils
  db = firebase.firestore()
  auth = firebase.auth()

  // collection references
  usersCollection = db.collection('users')
}

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  firebase
}
