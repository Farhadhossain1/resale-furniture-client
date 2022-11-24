// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRehruE9UeL0TIFZZX8FafUSrDrsWE-p0",
  authDomain: "asm-used-client.firebaseapp.com",
  projectId: "asm-used-client",
  storageBucket: "asm-used-client.appspot.com",
  messagingSenderId: "134095099421",
  appId: "1:134095099421:web:226f8bfe0976bfb2e2d8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;