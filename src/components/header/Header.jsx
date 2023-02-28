import React from 'react';
import logo from '../../img/logo.png'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='brand'>
                <div className='logo'>
                    <button>
                        <Link to={'/'}>
                            <img src={logo} alt="logo de la empresa" />
                        </Link>
                    </button>
                </div>
                <h1>La marzmorra del fantástico duende Earl weapons & magic shop</h1>
            </div>
            <NavBar />
        </header>
    );
};
