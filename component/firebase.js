// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpxWqIJkEzG56oHuWHlrRBfnUxi4TqK1w",
  authDomain: "reactnativenotebook.firebaseapp.com",
  projectId: "reactnativenotebook",
  storageBucket: "reactnativenotebook.appspot.com",
  messagingSenderId: "827353499061",
  appId: "1:827353499061:web:ae0cb6abe3ec840fea85fc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

/* // Get a list of cities from your database
async function getCities() {
  const db = getFirestore(app);
  const citiesCol = collection(db, 'notes');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
} */