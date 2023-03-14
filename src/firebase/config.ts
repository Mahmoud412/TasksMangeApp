import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIcrYDc2poev6xQaHQhTz5RtNaMdbCgEY',
  authDomain: 'mangetasksapp.firebaseapp.com',
  projectId: 'mangetasksapp',
  storageBucket: 'mangetasksapp.appspot.com',
  messagingSenderId: '308028732219',
  appId: '1:308028732219:web:62717003e30f5cd4f9fd1e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
