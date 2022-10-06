import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.css'
const Button = ({ buttonClass, buttonIcon, children, handleClick, prod }) => {

    const onClick = () => {
        if (handleClick) {
            handleClick(prod)
        }
    }

    return (
        <div>
            <button className={"noselect button-transition button-bkHover button-colorTransparent " + buttonClass} onClick={onClick} id={prod}>
                <span className="text">{children}</span>
                {buttonIcon ?
                    <span className="icon">
                        <FontAwesomeIcon icon={buttonIcon} className="plus-icon" />
                    </span>
                    : ''
                }
            </button>
        </div>
    )
}

export default Button
