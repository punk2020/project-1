import React from 'react';
import c from './Header.module.css';

function Header() {
    return (
        <header className={c.header}>
            <img src='https://ru.msi.com/images/MSI_logo_for_share2.png' />
        </header>
    );
}

export default Header;