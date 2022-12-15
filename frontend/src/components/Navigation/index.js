import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SearchBar from '../SearchBar';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  
  const [navClass, setNavClass] = useState('topNavBar');

  useEffect(() => {
    sessionUser ? setNavClass('topNavBarLoggedIn') : setNavClass('topNavBar')
  }, [sessionUser])
  
  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='logged-in-links'>
        <SearchBar />
        <a href="https://www.linkedin.com/in/arnobdam/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ArnobDam" target="_blank"><i className="fa-brands fa-github"></i></a>
        <ProfileButton user={sessionUser} />
      </div>
      
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-item" to="/signup">Sign up</NavLink>
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