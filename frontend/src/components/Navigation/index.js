import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  
  const [navClass, setNavClass] = useState('topNavBar');

  useEffect(() => {
    sessionUser ? setNavClass('topNavBarLoggedIn') : setNavClass('topNavBar')
  }, [sessionUser])
  
  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-item" to="/signup">Sign Up</NavLink>
        <NavLink className="nav-item" to="/login"><button>Log In</button></NavLink>
      </>
    );
  }

  return (
    <nav id={navClass}>
      <li>
        {/* <NavLink className="nav-item" exact to="/">Home</NavLink> */}
        {sessionLinks}
      </li>
    </nav>
  );
}

export default Navigation;