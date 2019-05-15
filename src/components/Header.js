import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const MenuElements = () => {
    const url = window.location.pathname;
    return (
      <ul className="menu">
        <li className="menu__li">
          <Link
            className={`menu__element ${
              url === "/" ? "menu__element--active" : ""
            }`}
          >
            Główna
          </Link>
        </li>
        <li className="menu__li">
          <Link
            className={`menu__element ${
              url === "/countdown" ? "menu__element--active" : ""
            }`}
          >
            Timer
          </Link>
        </li>
        <li className="menu__li">
          <Link className="menu__element">Object</Link>
        </li>
      </ul>
    );
  };
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <MenuElements />
        <div>
          <img />
          <Link className="links__link">Zaloguj się</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
