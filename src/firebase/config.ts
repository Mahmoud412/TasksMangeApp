import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCbT5-ywFYWYri25jnvCYHOOiVXC62VO0',
  authDomain: 'test-d5f21.firebaseapp.com',
  projectId: 'test-d5f21',
  storageBucket: 'test-d5f21.appspot.com',
  messagingSenderId: '481476744886',
  appId: '1:481476744886:web:45ed0f58c53e70e59e7817',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
