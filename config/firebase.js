import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAZ6cqkzewPU5argEqQH9q4RR5RmGWUd-c',
  authDomain: 'nlk-teste.firebaseapp.com',
  databaseURL: 'https://nlk-teste.firebaseio.com',
  projectId: 'nlk-teste',
  storageBucket: 'nlk-teste.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'nlk-teste',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
