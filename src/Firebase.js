import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'kaimins-ee78d.firebaseapp.com',
  databaseURL: 'https://kaimins-ee78d.firebaseio.com',
  projectId: 'kaimins-ee78d',
  storageBucket: 'kaimins-ee78d.appspot.com',
  messagingSenderId: '1012232769638',
  appId: '1:1012232769638:web:085718d645454035285da7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const storage = firebase.storage();

// export default firebase;

export { storage, firebase as default };
