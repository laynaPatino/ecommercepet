import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDPr5m8BBZ-30xL5qM3Xfy2oajglY66oYU",
    authDomain: "bomji-box.firebaseapp.com",
    projectId: "bomji-box",
    storageBucket: "bomji-box.appspot.com",
    messagingSenderId: "127362542125",
    appId: "1:127362542125:web:de2075492420dc221926a4"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}