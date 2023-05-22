import { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import PhoneVerify from "./PhoneVerify/PhoneVerify";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDYkjj-yPAR2cRc8h-w4EAaMRy91OCxOvw",
    authDomain: "metro-rail-ewu.firebaseapp.com",
    projectId: "metro-rail-ewu",
    storageBucket: "metro-rail-ewu.appspot.com",
    messagingSenderId: "417480564518",
    appId: "1:417480564518:web:d75b25740d1b561a71abe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unSubscriber();
  }, []);

  return (
    <div className="App">
      <h1>Verify Phone Number with OTP</h1>
      <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </div>
  );
}

export default App