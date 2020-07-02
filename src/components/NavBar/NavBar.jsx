import React from 'react';
import c from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={c.nav}>
            <NavLink to="/profile" activeClassName={c.active} className={c.item}>Profile</NavLink>
            <div className={c.indent}></div>
            <NavLink to="/dialogs" activeClassName={c.active} className={c.item}>Messages</NavLink>
            <div className={c.indent}></div>
            <NavLink to="" activeClassName={c.active} className={c.item}>News</NavLink>
            <div className={c.indent}></div>
            <NavLink to="" activeClassName={c.active} className={c.item}>Music</NavLink>
            <div className={c.indent}></div>
            <NavLink to="" activeClassName={c.active} className={c.item}>Settings</NavLink>
        </nav>
    )
}

export default NavBar;