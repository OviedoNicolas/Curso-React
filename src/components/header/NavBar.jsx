import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { CartWidget } from '../cart/CartWidget';
import { Menu } from './Menu';

export const NavBar = () => {

    const { cantidadProductos } = useContext(CartContext)

    return ( 
        <nav>
            <Menu />
            <CartWidget cantidad={cantidadProductos()} />
        </nav>
    );
};

export default NavBar;
