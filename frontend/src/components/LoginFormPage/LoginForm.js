import React from 'react';
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

    return (
        <form className='loginForm' onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>

            <h1 className="loginFormHeader">To continue, log in to Symphonify.</h1>

            <label id="loginLabel">
                Email Address or Username
            </label>
                <input
                id ="loginInput"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder='Email Address or Username'
                />
            
            <label id="loginLabel">
                Password
            </label>
                <input
                id ="loginInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
                />
            
            <div className='loginButtonsDiv'>
              <button className="demoUserButton" type="submit">Demo User</button>
              <button className="loginButton" type="submit">Log In</button>
            </div>
            
        </form>
    )
    
}

  export default LoginForm;