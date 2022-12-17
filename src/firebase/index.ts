import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCMEI_RvO16EIlT0UBc7zcqsAW9OUEalJ0',
    authDomain: 'tawi-library.firebaseapp.com',
    projectId: 'tawi-library',
    storageBucket: 'tawi-library.appspot.com',
    messagingSenderId: '890075061930',
    appId: '1:890075061930:web:6346012398e0ac4225fad3',
    measurementId: 'G-VCCQW9N0LR',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
