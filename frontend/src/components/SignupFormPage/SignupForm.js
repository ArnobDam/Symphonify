import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';

const SignupForm = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === confirmEmail) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
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
        return setErrors([`The email addresses don't match.`]);
    };

    const handleDemoUserSignupForm = (e) => {
        e.preventDefault();
        setErrors([]);
        setEmail('guest@guest.com');
        setConfirmEmail('guest@guest.com');
        setUsername('Guest');
        setPassword('password');
        return dispatch(sessionActions.login({
            credential: 'guest@guest.com',
            password: 'password'
        }))
      }

    return (
        <form className="signupForm" onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>

            <h1 className="loginFormHeader">Sign up with your email address</h1>

            <label id="signupLabel">
                What's your email?
            </label>
            <input
                id="signupInput"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email."
            />

            <label id="signupLabel">
                Confirm your Email
            </label>
            <input
                id="signupInput"
                type="text"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                required
                placeholder="Enter your email again."
            />

            <label id="signupLabel">
                Password
            </label>
            <input
                id="signupInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create a password."
            />

            <label id="signupLabel">
                What should we call you?
            </label>
            <input
                id="signupInput"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter a profile name."
            />
            <p className="signupComment">This appears on your profile.</p>
            <div className='signupButtonsDiv'>
                <button className="signupButton" type="submit">Sign Up</button>
                <button onClick={handleDemoUserSignupForm} className="demoUserSignUpForm" type="submit">Demo User</button>
            </div>
        </form>
    )
};

export default SignupForm;