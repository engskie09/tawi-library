import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

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

const db = getFirestore(app);
const storage = getStorage(app);

const bookCollection = collection(db, 'books');

const getBooks = async () => {
    return (await getDocs(bookCollection)).docs.map((doc) => {
        const data = doc.data({ serverTimestamps: 'estimate' });
        data.id = doc.id;
        return data;
    });
};

const createBook = async (payload: { name: string; description: string; authors: string; dateCreated: Date }) => {
    return await addDoc(bookCollection, { ...payload });
};

const updateBook = async (
    id: string,
    payload: { name: string; description: string; authors: string; dateCreated: Date },
) => {
    const bookRef = doc(db, 'books', id);

    return await updateDoc(bookRef, { ...payload });
};

const deleteBook = async (id: string) => {
    const bookRef = doc(db, 'books', id);

    return await deleteDoc(bookRef);
};

const uploadBookIcon = async (file: File) => {
    const storageRef = ref(storage, 'icons/' + file.name);
    await uploadBytes(storageRef, file);
    return;
};

export { app, auth, getBooks, createBook, updateBook, deleteBook };
