import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAU1ubCzIotT4vd4VGgCGdM3xW0JAuV-O8",
    authDomain: "firegallery-5e7b7.firebaseapp.com",
    projectId: "firegallery-5e7b7",
    storageBucket: "firegallery-5e7b7.appspot.com",
    messagingSenderId: "266197312176",
    appId: "1:266197312176:web:dc7eb5fcf39722299d5175"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };