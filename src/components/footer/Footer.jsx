import React from 'react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className='imgFooter'>
        <button>
            <Link to={'/'}>
                <img src={logo} alt="logo de la empresa" />
            </Link>
        </button>
        </div>
        <div>
        <ul className='menu'>
            <li>
                <div>
                    <h4>Ropa</h4>
                    <ul>
                        <li>
                            <Link to={`productos/ropa/hombre`}>Hombre</Link>
                        </li>
                        <li>
                            <Link to={`productos/ropa/mujer`}>Mujer</Link>
                        </li>
                        <li>
                            <Link to={`productos/ropa/unisex`}>Unisex</Link>
                        </li>
                        <li>
                            <Link to={`productos/ropa`}>Ver todos</Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h4>Armas</h4>
                    <ul>
                        <li>
                            <Link to={`productos/armas/espadas`}>Espadas</Link>
                        </li>
                        <li>
                            <Link to={`productos/armas/hachas`}>Hachas</Link>
                        </li>
                        <li>
                            <Link to={`productos/armas/arcos`}>Arcos</Link>
                        </li>
                        <li>
                            <Link to={`productos/armas/varios`}>Varios</Link>
                        </li>
                        <li>
                            <Link to={`productos/armas`}>Ver Todos</Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <Link to={`productos/accesorios`}>Accesorios</Link>
            </li>
            <li>
                <Link to={`productos/magia`}>Magia</Link>
            </li>
            <li>
                <Link to={`productos/pociones`}>Pociones</Link>
            </li>
        </ul>
        </div>
    </footer>
  )
}
