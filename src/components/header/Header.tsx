import React from "react";
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="./logo.png" width="100" height="auto"/>
            <span className={s.text}> MOTO-FRIENDS </span>
        </header>
    )
}

export default Header;