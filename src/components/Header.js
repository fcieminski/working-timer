import React from "react";
import { NavLink } from "react-router-dom";
import firebase from "firebase";

const Header = props => {
  let currentUser = firebase.auth().currentUser;

  const MenuElements = () => {
    return (
      <ul className="menu">
        <li className="menu__li">
          <NavLink
            exact
            to="/"
            activeClassName="menu__element--active"
            className="menu__element"
          >
            Główna
          </NavLink>
        </li>
        <li className="menu__li">
          <NavLink
            // activeClassName="menu__element--active"
            className="menu__element"
          >
            Timer
          </NavLink>
        </li>
        <li className="menu__li">
          <NavLink
            className="menu__element"
            // activeClassName="menu__element--active"
          >
            Object
          </NavLink>
        </li>
      </ul>
    );
  };
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <MenuElements />
        <div>
          {props.user ? (
            <p>Logged as {currentUser.email}</p>
          ) : (
            <NavLink to="/signin" className="links__link">
              Zaloguj się
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
