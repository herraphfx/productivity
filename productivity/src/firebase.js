import firebase from 'firebase/compat/app';



const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyABso3hwIhdSEa-gW9QM4GOeelsJ6LKlOo",
    authDomain: "productivity-9c9f1.firebaseapp.com",
    projectId: "productivity-9c9f1",
    storageBucket: "productivity-9c9f1.appspot.com",
    messagingSenderId: "1069929414090",
    appId: "1:1069929414090:web:1e19d2ae332ccd68a1a333"
})

export {firebaseConfig as firebase}