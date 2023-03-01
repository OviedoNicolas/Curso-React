import React, {useState} from 'react';
import { Dropdown , DropdownItem , DropdownMenu , DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom'

export const Menu = () => {
    const [dropdownRopa, setDropdownRopa] = useState(false)

    const desplegarRopa = () =>{
        setDropdownRopa(!dropdownRopa)
    }

    const [dropdownArmas, setDropdownArmas] = useState(false)

    const desplegarArmas = () =>{
        setDropdownArmas(!dropdownArmas)
    }

    return (
        <ul className='menu'>
            <li>
                <Dropdown isOpen={dropdownRopa} toggle={desplegarRopa}>
                    <DropdownToggle caret >Ropa</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to={`productos/ropa/hombre`}>Hombre</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/ropa/mujer`}>Mujer</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/ropa/unisex`}>Unisex</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/ropa`}>Ver todos</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown> 
            </li>
            <li>
                <Dropdown isOpen={dropdownArmas} toggle={desplegarArmas}>
                    <DropdownToggle caret>Armas</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to={`productos/armas/espadas`}>Espadas</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/armas/hachas`}>Hachas</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/armas/arcos`}>Arcos</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/armas/varios`}>Varios</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={`productos/armas`}>Ver Todos</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown> 
            </li>
            <li>
                <button>
                    <Link to={`productos/accesorios`}>Accesorios</Link>
                </button>
            </li>
            <li>
                <button>
                    <Link to={`productos/magia`}>Magia</Link>
                </button> 
            </li>
            <li>
                <button>
                    <Link to={`productos/pociones`}>Pociones</Link>
                </button> 
            </li>
        </ul>
    );
};
