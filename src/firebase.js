// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDvjI08nm_ri2L8gWamXQzzGpb0vkuTHI8",
    authDomain: "clone-df2a6.firebaseapp.com",
    projectId: "clone-df2a6",
    storageBucket: "clone-df2a6.appspot.com",
    messagingSenderId: "951700037310",
    appId: "1:951700037310:web:9c76452b98da46238688ef",
    measurementId: "G-ZH77EH8PCW"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};