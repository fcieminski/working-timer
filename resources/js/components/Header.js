import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiPlay, FiLogOut, FiLogIn } from "react-icons/fi";
import axios from "axios";

const Header = props => {
    const [menu, setMenu] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (props.user) {
            setUserInfo({
                name: props.user.name,
                email: props.user.email
            });
        }
    }, [props]);

    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        const handleClick = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setMenu(false);
            }
        };
        useEffect(() => {
            document.addEventListener("mousedown", handleClick);
            return () => {
                document.removeEventListener("mousedown", handleClick);
            };
        });
    }

    const userMenu = () => {
        return (
            <div className="navbar__menu-logout" ref={wrapperRef}>
                <p className="navbar__menu-logout-p" onClick={logOut}>
                    Wyloguj się
                </p>
                <FiLogOut />
            </div>
        );
    };

    async function logOut() {
        await axios.get("/app/logout").then(setMenu(false));
        await props.fetchUser();
    }

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
                {/* <li className="menu__li">
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
                </li> */}
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
