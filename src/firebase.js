import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var db = undefined;
var auth = undefined;
var usersCollection = undefined;

function initFirebase(firebaseConfig) {
  firebase.initializeApp(firebaseConfig);

  db = firebase.firestore();
  auth = firebase.auth();
  usersCollection = db.collection('users');
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

  initFirebase(firebaseConfig);
} else {
  fetch('/__/firebase/init.json').then(async response => {
    const firebaseConfig = await response.json();
    console.log(firebaseConfig);
    initFirebase(firebaseConfig);
  });
}

// export utils/refs
export {
  db,
  auth,
  usersCollection
}
