import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './InputCheckboxForm.scss'

const InputCheckboxForm = ({ id, text, value, onChange }) => {
    return (
        <>
            <div className='input-container ic1'>
                <div className='checkbox'>
                    <input className='noDisplay checkbox' type="checkbox" id={id} value={value} defaultChecked={value} onClick={onChange} />
                    <label htmlFor={id}> {text} <FontAwesomeIcon icon={faStar} className="plus-icon" /></label>
                </div>

                {/* <input id={id} name={id} value={value} className='input' type='checkbox' placeholder=' ' onChange={onChange} />
                <label htmlFor={id} className=''>{text}</label> */}
            </div>
        </>
    )
}

export default InputCheckboxForm
