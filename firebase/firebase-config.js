// Replace the values below with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBotnJf9C1vKhvV2XrugwTKIrLidQIXceg",
    authDomain: "gym-management-system-c276b.firebaseapp.com",
    projectId: "gym-management-system-c276b",
    storageBucket: "gym-management-system-c276b.firebasestorage.app",
    messagingSenderId: "302955390156",
    appId: "1:302955390156:web:73997733b860c2e5030e69",
    measurementId: "G-XNR33NQPWZ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional (but recommended for easier use in other files)
const auth = firebase.auth();
const db = firebase.firestore();