import React from 'react';
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={c.header}>
            <img src='https://ru.msi.com/images/MSI_logo_for_share2.png' />

            <NavLink to="/profile" activeClassName={c.active} className={c.item}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={c.active} className={c.item}>Messages</NavLink>
            <NavLink to="News" activeClassName={c.active} className={c.item}>News</NavLink>
            <NavLink to="Music" activeClassName={c.active} className={c.item}>Music</NavLink>
            <NavLink to="Settings" activeClassName={c.active} className={c.item}>Settings</NavLink>
        </header>
    );
}

export default Header;