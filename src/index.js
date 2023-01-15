import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFXn8VhPBIMn8otH9R98bv3EJfNQ0fjhw",
  authDomain: "tamboecomerce.firebaseapp.com",
  projectId: "tamboecomerce",
  storageBucket: "tamboecomerce.appspot.com",
  messagingSenderId: "708226533596",
  appId: "1:708226533596:web:7be7f23d58bbf7b6af8c19"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

