// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCMEI_RvO16EIlT0UBc7zcqsAW9OUEalJ0',
    authDomain: 'tawi-library.firebaseapp.com',
    projectId: 'tawi-library',
    storageBucket: 'tawi-library.appspot.com',
    messagingSenderId: '890075061930',
    appId: '1:890075061930:web:6346012398e0ac4225fad3',
    measurementId: 'G-VCCQW9N0LR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
