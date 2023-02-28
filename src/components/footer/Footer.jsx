import React from 'react'
import logo from '../../img/logo.png'

export const Footer = () => {
  return (
    <footer>
        <div className='imgFooter'>
            <img src={logo} alt="logo de la empresa" />
        </div>
        <div>
        <ul className='menu'>
            <li>
                <div>
                    <h4>Ropa</h4>
                    <ul>
                        <li>
                            <button href="#">Hombre</button> 
                        </li>
                        <li>
                            <button href="#">Mujer</button> 
                        </li>
                        <li>
                            <button href="#">Armaduras</button> 
                        </li>
                        <li>
                            <button href="#">Ver todos</button> 
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h4>Armas</h4>
                    <ul>
                        <li>
                            <button href="#">Espadas</button> 
                        </li>
                        <li>
                            <button href="#">Hachas</button> 
                        </li>
                        <li>
                            <button href="#">Arcos</button> 
                        </li>
                        <li>
                            <button href="#">Varios</button> 
                        </li>
                        <li>
                            <button href="#">Ver todos</button> 
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <button href="#">Accesorios</button> 
            </li>
            <li>
                <button href="#">Mágia</button> 
            </li>
            <li>
                <button href="#">Pociones</button> 
            </li>
        </ul>
        </div>
    </footer>
  )
}
