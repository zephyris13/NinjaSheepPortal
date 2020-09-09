import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

function checkFirebase() {
  console.log('Checking if Firebase has loaded...');
  if (firebase.apps.length === 0) {
    setTimeout(checkFirebase, 2000);
  }
}

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
    const firebaseConfig = await response.json();

    firebase.initializeApp(firebaseConfig);
  });
}

checkFirebase();

// utils
const db = firebase.firestore()
const auth = firebase.auth()

console.log('Firebase loaded!');

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  firebase
}
