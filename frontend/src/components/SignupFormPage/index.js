import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import SignupForm from "./SignupForm";
import './SignupForm.css';

function SignupFormPage() {
  
  return (
    <div className="signupPage">
      <SignupForm />
    </div>
  );
}

export default SignupFormPage;