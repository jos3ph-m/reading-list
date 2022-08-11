import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'readinglistapp-c761b.firebaseapp.com',
  projectId: 'readinglistapp-c761b',
  storageBucket: 'readinglistapp-c761b.appspot.com',
  messagingSenderId: '669047213390',
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// init firebase
initializeApp(firebaseConfig);
