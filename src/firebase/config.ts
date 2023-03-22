import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVgw80Y5mIuLE24A7VyPDQbPg9uciVNf4',
  authDomain: 'testproject-e8a5b.firebaseapp.com',
  projectId: 'testproject-e8a5b',
  storageBucket: 'testproject-e8a5b.appspot.com',
  messagingSenderId: '974685911747',
  appId: '1:974685911747:web:d151f2a8098c4dfcda4076',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
