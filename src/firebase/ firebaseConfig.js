import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZFetIlgkkarIOj24ZfEDUSVmzOcJcUyw",
  authDomain: "devconnect-e4c15.firebaseapp.com",
  projectId: "devconnect-e4c15",
  storageBucket: "devconnect-e4c15.firebasestorage.app",
  messagingSenderId: "844367136999",
  appId: "1:844367136999:web:4da1023e780ea801f2fa42",
  measurementId: "G-673WVFS71W"
};

const app = initializeApp(firebaseConfig);

export default app;