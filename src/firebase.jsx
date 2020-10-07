import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBESC3CNUTt1GfmxKJWId7_VL0E4u4uH7I',
  authDomain: 'frame-todo.firebaseapp.com',
  databaseURL: 'https://frame-todo.firebaseio.com',
  projectId: 'frame-todo',
  storageBucket: 'frame-todo.appspot.com',
  messagingSenderId: '1076378341571',
  appId: '1:1076378341571:web:86fdb57d78195b41aa5276',
  measurementId: 'G-V9QESDXDRW',
});

const db = firebaseApp.firestore();

export { db };
