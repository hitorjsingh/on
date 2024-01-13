// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
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
