import React from "react";
import  s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><NavLink to="/profile" className={classNav => classNav.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" className={classNav => classNav.isActive ? s.active : s.item }>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" className={classNav => classNav.isActive ? s.active : s.item }>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" className={classNav => classNav.isActive ? s.active : s.item }>Music</NavLink></div>
            <div className={s.item}><NavLink to="/helping" className={classNav => classNav.isActive ? s.active : s.item }>Helping</NavLink></div>
        </nav>
    )
}

export default Navbar;