import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import fire from "../firebase/firebase";
import { FiPlay, FiLogOut, FiLogIn } from "react-icons/fi";

const Header = props => {
  const [menu, setMenu] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (props.user && fire.auth.currentUser.displayName) {
      setUserInfo({
        name: fire.auth.currentUser.displayName,
        email: fire.auth.currentUser.email
      });
    }
  }, [props.user]);

  const userMenu = () => {
    return (
      <div className="navbar__menu-logout">
        <p
          className="navbar__menu-logout-p"
          onClick={() => fire.logOut().then(setMenu(false))}
        >
          Wyloguj się
        </p>
        <FiLogOut />
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
            <div className="navbar__menu-loged">
              <NavLink
                exact
                to={{
                  pathname: "/profile",
                  aboutUser: {
                    userInfo
                  }
                }}
                activeClassName="menu__element--active"
                className="navbar__menu-loged-p"
              >
                Zalogowany jako {userInfo.name}
              </NavLink>
              <FiPlay
                className="navbar__menu-loged-link"
                onClick={() => setMenu(!menu)}
              />
              {menu && userMenu()}
            </div>
          ) : (
            <NavLink to="/signin" className="links__link">
              Zaloguj się <FiLogIn />
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
