import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import fire from "../firebase/firebase";
import { FiPlay } from "react-icons/fi";

const Header = props => {
  const [menu, setMenu] = useState(false);

  const userMenu = () => {
    return (
      <div>
        <p onClick={() => fire.logOut().then(setMenu(false))}>Wyloguj się</p>
      </div>
    );
  };

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
            <p>
              Zalogowany jako {fire.auth.currentUser.displayName}
              <FiPlay onClick={() => setMenu(!menu)} />
              {menu && userMenu()}
            </p>
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
