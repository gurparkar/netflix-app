import React, { useRef } from 'react'

import '../SignInScreen.css';

import { firebaseApp } from "../firebase1";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";




  function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const auth = getAuth();
  
    const register = (e) => {
      e.preventDefault();
  
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((e) => {console.log("SignUp" +e)})
        .catch((error) => {
          alert("Error :" + error.message);
        });
    };
  
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((e) => {console.log( e.user.email)})
        .catch((error) => {
          console.log(error.message)
          alert(error.message)
          ;
        });
    };
  
    return (
      <div className="signupScreen">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="signupScreen_gray">New to Netflix? </span>
            <span className="signupScreen_link" onClick={register}>
              Sign Up Now.
            </span>
          </h4>
        </form>
      </div>
    );
  }
  
  export default SignUpScreen;