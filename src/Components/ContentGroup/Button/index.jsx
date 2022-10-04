import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.css'
const Button = ( {buttonClass, buttonIcon, children, handleClick, idProd} ) => {

    const onClick = () => {
        if(handleClick){
            handleClick(idProd)
        }
    }

    return (
        <div>
            <button className={"noselect " + buttonClass} onClick={onClick} id={idProd}>
                <span className="text">{children}</span>
                <span className="icon">
                    <FontAwesomeIcon icon={buttonIcon} className="plus-icon" />
                </span>
            </button>
        </div>
    )
}

export default Button
