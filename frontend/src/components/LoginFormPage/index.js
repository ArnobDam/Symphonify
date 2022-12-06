import React from 'react';
// import { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import LoginForm from './LoginForm';

function LoginFormPage() {


  // const LoginForm = () => (
  //   <form onSubmit={handleSubmit}>
  //     <ul>
  //       {errors.map(error => <li key={error}>{error}</li>)}
  //     </ul>
  //     <label>
  //       Username or Email
  //       <input
  //         type="text"
  //         value={credential}
  //         onChange={(e) => setCredential(e.target.value)}
  //         required
  //       />
  //     </label>
  //     <label>
  //       Password
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         required
  //       />
  //     </label>
  //     <button type="submit">Log In</button>
  //   </form>
  // )

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
}

export default LoginFormPage;