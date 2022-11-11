import React from "react";
import logo from "./logo.svg";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.Header}>
            <div>
                <nav>
                    <ul className={styles.Header__list}>
                        <img className={styles.Header__img} src={logo}></img>
                        <h1 className={styles.Header__title}>
                            KIYOMI CERAMICS
                        </h1>
                        <div className={styles.Header__link}>
                            <NavLink className={styles.Header__home} to={`/`}>
                                Home
                            </NavLink>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
