// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDML6Zk2K5jSSlk_UV8katX3QpozX4hwAg",
  authDomain: "repliq-c3106.firebaseapp.com",
  projectId: "repliq-c3106",
  storageBucket: "repliq-c3106.appspot.com",
  messagingSenderId: "113398516345",
  appId: "1:113398516345:web:4f72e8db640ae0fa1162a8",
  measurementId: "G-X8TV985JH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);
export default analytics;
