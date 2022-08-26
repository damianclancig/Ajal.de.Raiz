import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
            const changeWidth = () => {
                setScreenWidth(window.innerWidth);
            }
            window.addEventListener('resize', changeWidth)
            return () => {
                window.removeEventListener('resize', changeWidth)
            }
        }, []
    )

    return (
        <nav>
            {(toggleMenu || screenWidth > 600) && (
                <ul className="list">
                    <li className="items">Inicio</li>
                    <li className="items">Productos</li>
                    <li className="items">Acerca de nosotros</li>
                    <li className="items">Contacto</li>
                </ul>
            )}

            <button onClick={toggleNav} className="btn">Menu</button>
        </nav>
    )
}