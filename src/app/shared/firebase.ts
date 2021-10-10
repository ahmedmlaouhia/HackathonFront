// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYNfahH7nqfqzV9loAhschlry_CwjY-Gw',
  authDomain: 'hackathon-fsb-868e2.firebaseapp.com',
  projectId: 'hackathon-fsb-868e2',
  storageBucket: 'hackathon-fsb-868e2.appspot.com',
  messagingSenderId: '160128350278',
  appId: '1:160128350278:web:a9d98ecb86c40eb6a07247',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (file: any) =>
  uploadBytes(ref(getStorage(app), 'chat/' + file.name), file).then(() =>
    getDownloadURL(ref(getStorage(app), 'chat/' + file.name))
  );
