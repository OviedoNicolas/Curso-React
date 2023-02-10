import React from 'react';
import { CartWidget } from './CartWidget';
import { Menu } from './Menu';

export const NavBar = () => {
    return ( 
        <nav>
            <Menu />
            <CartWidget cantidad={10} />
        </nav>
    );
};

export default NavBar;
