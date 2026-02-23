import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBtduK_b6hFcT2zSoA8hKSk1oPoWCQ4mfs",
  authDomain: "fir-tutorial-1dce1.firebaseapp.com",
  projectId: "fir-tutorial-1dce1",
  storageBucket: "fir-tutorial-1dce1.firebasestorage.app",
  messagingSenderId: "229651676483",
  appId: "1:229651676483:web:d7d685731ba9a375b543f6",
  measurementId: "G-JBTKZS1QWP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
