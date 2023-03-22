import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_DAwu9F5aGbq1b0AlzZidDBcKowF3MQU',
  authDomain: 'mangetasks.firebaseapp.com',
  projectId: 'mangetasks',
  storageBucket: 'mangetasks.appspot.com',
  messagingSenderId: '727441187032',
  appId: '1:727441187032:web:476dfec0e6df84454637ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
