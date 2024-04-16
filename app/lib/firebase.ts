// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByun1FV6OZrxGTNUuF3HH9l9B4Kt_oIRc",
  authDomain: "nextjs-social-media-cf991.firebaseapp.com",
  projectId: "nextjs-social-media-cf991",
  storageBucket: "nextjs-social-media-cf991.appspot.com",
  messagingSenderId: "606649620441",
  appId: "1:606649620441:web:82259d7e4d5c667353ebc8",
  measurementId: "G-JYD82JTF08",
};

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(firebase);
// export default firebase;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

// lib/firebase.js

// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyByun1FV6OZrxGTNUuF3HH9l9B4Kt_oIRc",
//   authDomain: "nextjs-social-media-cf991.firebaseapp.com",
//   projectId: "nextjs-social-media-cf991",
//   storageBucket: "nextjs-social-media-cf991.appspot.com",
//   messagingSenderId: "606649620441",
//   appId: "1:606649620441:web:82259d7e4d5c667353ebc8",
//   measurementId: "G-JYD82JTF08",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;
