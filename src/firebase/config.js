import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZzwArRPzPSLADSa9jb0KVtfm6EEJmP3k",
    authDomain: "summarizerexpo.firebaseapp.com",
    databaseURL: "https://summarizerexpo.firebaseio.com",
    projectId: "summarizerexpo",
    storageBucket: "summarizerexpo.appspot.com",
    messagingSenderId: "785330434396",
    appId: "1:785330434396:web:cd64d150452ba40cdf5199",
    measurementId: "G-DYKYGVN7SR"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export { firebase };