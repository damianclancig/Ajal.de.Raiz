import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './InputCheckboxForm.scss'

const InputCheckboxForm = ({ id, text, value, required, onChange }) => {
    return (
        <>
            <div>
                <ul class="ks-cboxtags">
                    <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
      <label for="checkboxOne"><FontAwesomeIcon icon='fa-solid fa-star' /> {text}</label></li>
                </ul> 

                {/* <input id={id} name={id} value={value} className='input' type='checkbox' placeholder=' ' onChange={onChange} />
                <label htmlFor={id} className=''>{text}</label> */}
            </div>
        </>
    )
}

export default InputCheckboxForm
