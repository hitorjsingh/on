// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4mHQZgdQW_hDWVOKc8Ry_jAFPKQIZNsk",
    authDomain: "rajvpsmath.firebaseapp.com",
    projectId: "rajvpsmath",
    storageBucket: "rajvpsmath.appspot.com",
    messagingSenderId: "987632352897",
    appId: "1:987632352897:web:5c5929058e0b46231c9780",
    measurementId: "G-GLNPKBT08S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const auth = getAuth();

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, you can add logic for authenticated user
    console.log('User is signed in:', user);
  } else {
    // No user is signed in, you can add logic for unauthenticated user
    console.log('No user is signed in.');
  }
});
