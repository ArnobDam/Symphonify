import React from 'react';
// import { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import LoginForm from './LoginForm';

function LoginFormPage() {

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
}

export default LoginFormPage;