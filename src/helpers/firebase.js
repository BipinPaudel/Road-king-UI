import firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCA3hDbR_8qsNehppmr7-RGErcYmBM-ty4",
  authDomain: "vehicle-tracker-97ecf.firebaseapp.com",
  projectId: "vehicle-tracker-97ecf",
  storageBucket: "vehicle-tracker-97ecf.appspot.com",
  messagingSenderId: "362916709587",
  appId: "1:362916709587:web:a42cbeaf3b536312b20026"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };