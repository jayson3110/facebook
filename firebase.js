import firebase from 'firebase';
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyDA6V05jgWEJj0Y6DV11nWkLyV8Wou8qug",
    authDomain: "facebookclone-1e10d.firebaseapp.com",
    projectId: "facebookclone-1e10d",
    storageBucket: "facebookclone-1e10d.appspot.com",
    messagingSenderId: "758018584632",
    appId: "1:758018584632:web:821c06208d21ae924976cd",
    measurementId: "G-015K1YJXR1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export{db, storage}; 