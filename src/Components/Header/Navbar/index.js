import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar(prop) {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className='push-left'>
            <div className="menu">
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleNav} />
            </div>
            {(toggleMenu) && (
                <ul className="list">
                    <li className="items">Inicio</li>
                    <li className="items">Productos</li>
                    <li className="items">Acerca de nosotros</li>
                    <li className="items">Contacto</li>
                </ul>
            )}

        </nav>
    )
}

export default Navbar;