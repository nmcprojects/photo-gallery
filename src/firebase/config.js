import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrtQIxH31zKl7pbT4xZnoe0pXaiPnwrWY",
    authDomain: "photo-gallery-app-76ff2.firebaseapp.com",
    projectId: "photo-gallery-app-76ff2",
    storageBucket: "photo-gallery-app-76ff2.appspot.com",
    messagingSenderId: "142065378163",
    appId: "1:142065378163:web:7ea4d7279b76174f839b06"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// DB
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
    auth,
    provider,
    projectStorage,
    projectFirestore,
    timestamp
};