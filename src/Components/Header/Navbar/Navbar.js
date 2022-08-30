import React, { useState } from 'react'
import './Navbar.css'

function Navbar(prop) {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className='push-left'>
            <button onClick={toggleNav} className="btn">Menu</button>
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