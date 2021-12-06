import React from "react";
import './Header.css';


const Header = () => {
    return (
        <header className="header">
            <img className="logo" src="./logo.png" width="100" height="auto"/>
            <span className="logo-text"> MOTO-FRENDS </span>
        </header>
    )
}

export default Header;