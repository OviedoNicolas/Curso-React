import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './style.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABI2k6Azq53nLDUSYnQ8ZR9pUbKLhk5o0",
  authDomain: "ecommerce-coderhouse-b96c4.firebaseapp.com",
  projectId: "ecommerce-coderhouse-b96c4",
  storageBucket: "ecommerce-coderhouse-b96c4.appspot.com",
  messagingSenderId: "536641503385",
  appId: "1:536641503385:web:d98ecf700439b31951b808"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
