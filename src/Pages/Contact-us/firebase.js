import firebase from 'firebase';

var firebaseApp  = firebase.initializeApp({

    apiKey: "AIzaSyCVOdbALqWRtg50CZLpHtw6fO9Nljc3hkI",
    authDomain: "my-react-app-f0b0a.firebaseapp.com",
    databaseURL: "https://my-react-app-f0b0a.firebaseio.com",
    projectId: "my-react-app-f0b0a",
    storageBucket: "my-react-app-f0b0a.appspot.com",
    messagingSenderId: "230811617188",
    appId: "1:230811617188:web:19b7187569e6cc6dcf6331"
});

var db = firebaseApp.firestore();

export { db };