// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCv5TQKzQeR-QVGrrcJ4hg0m513XU-NBbU',
  authDomain: 'median-7f74b.firebaseapp.com',
  projectId: 'median-7f74b',
  storageBucket: 'median-7f74b.appspot.com',
  messagingSenderId: '350661620086',
  appId: '1:350661620086:web:bfd444fc095887c3770a57',
  measurementId: 'G-R3JMDSK37V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    return null;
  }
};

export { auth, provider };
