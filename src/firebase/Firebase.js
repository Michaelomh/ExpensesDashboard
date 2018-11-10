// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC3J9LQuddHlGF8ePfEQ55NnJXBcvIHADU",
  authDomain: "expensestrackerdashboard.firebaseapp.com",
  databaseURL: "https://expensestrackerdashboard.firebaseio.com",
  projectId: "expensestrackerdashboard",
  storageBucket: "expensestrackerdashboard.appspot.com",
  messagingSenderId: "345268338397"
};
firebase.initializeApp(config);

export default firebase;
