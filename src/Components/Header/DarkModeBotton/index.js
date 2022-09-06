import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import './DarkModeBotton.css'

function DarkModeBotton() {
        
    /**
     * Determina si el checkbox debería estar checkeado basado en
     * el contenido del localStorage
     */
    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    /**
     * Cada vez que el estado checked cambie, actualiza la propiedad
     * data-theme en el HTML para que use el tema que estamos almacenando
     * en el localStorage
     */
    useEffect(() => {
        document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checked]);

    /**
     * Actualiza el estado checked y el contenido de nuestro objeto
     * theme en el localStorage basados en el checkbox
     */
    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    };

    return (
        <div >
            <div class="container-btn-mode" onClick={() => toggleThemeChange()} >
                <div id="id-sun" class="btn-mode sun">
                    <FontAwesomeIcon icon={faSun} />
                </div>
                <div id="id-moon" class="btn-mode moon">
                    <FontAwesomeIcon icon={faMoon} />
                </div>
            </div>
        </div>
    )
} 

export default DarkModeBotton;