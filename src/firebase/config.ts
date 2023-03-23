import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6LRrlc1Kiof5pkaeD6jfUtnK5MCw2Mnw',
  authDomain: 'test2-d8c67.firebaseapp.com',
  projectId: 'test2-d8c67',
  storageBucket: 'test2-d8c67.appspot.com',
  messagingSenderId: '767133285851',
  appId: '1:767133285851:web:136ce7a08637499a87fbfe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
