import React from 'react';
import logo from '../img/logo.png'
import NavBar from './NavBar';

export const Header = () => {
    return (
        <header>
            <div className='brand'>
                <div className='logo'>
                    <img src={logo} alt="logo de la empresa" />
                </div>
                <h1>La marzmorra del fantástico duende Earl weapons & magic shop</h1>
            </div>
            <NavBar />
        </header>
    );
};
