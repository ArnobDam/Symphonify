import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [caretClass, setCaretClass] = useState('fa-sharp fa-solid fa-caret-down')

  const profileButtonClick = () => {
    openMenu();
    changeCaret();
  }

  const changeCaret = () => {
    caretClass === 'fa-sharp fa-solid fa-caret-down' ? 
    setCaretClass('fa-sharp fa-solid fa-caret-up') :
    setCaretClass('fa-sharp fa-solid fa-caret-down')
  }
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="profileButton" onClick={profileButtonClick}>
        {/* <i className="fa-solid fa-user-circle" /> */}
        <i className="fa-regular fa-user"></i>
        {` ${user.username}`}
        {/* <i className="fa-sharp fa-solid fa-caret-down"></i> */}
        <i className={caretClass}></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li>{user.username}</li>
          <li>{user.email}</li> */}
          <li>
            <button className="logoutButton" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;