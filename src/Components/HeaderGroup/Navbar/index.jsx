import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar(prop) {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className='push-left'>
            {(!toggleMenu) && (
                <div className={`boton menu`}>
                    <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleNav} />
                </div>
            )}
            {(toggleMenu) && (
                <>
                    <div className={`boton menu close`}>
                        <FontAwesomeIcon icon={faXmark} className="menu-icon" onClick={toggleNav} />
                    </div>
                    <ul className={`list ${!!toggleMenu ? "active" : "inactive"}`}>
                        <li className="items" onClick={toggleNav}><Link to='/'>Inicio</Link></li>
                        <li className="items" onClick={toggleNav}><Link to='/tienda'>Tienda</Link></li>
                        <li className="items" onClick={toggleNav}><Link to='/acercade'>Acerca de nosotros</Link></li>
                        <li className="items" onClick={toggleNav}><Link to='/contacto'>Contacto</Link></li>
                    </ul>
                </>
            )}

        </nav>
    )
}

export default Navbar;