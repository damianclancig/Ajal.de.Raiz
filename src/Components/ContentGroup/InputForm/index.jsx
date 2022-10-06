import React from 'react'
import "./InputForm.css"

const InpurForm = ({ id, text, value, required, onChange }) => {
    const showRequired = () => {
        if (required !== undefined) {
            return required ? <span className='input_requerido'>Es requerido</span> : '*'
        }
        return '';
    }

    return (
        <div>
            <div className='input-container ic1'>
                <input id={id} name={id} value={value} className='input' type='text' placeholder=' ' onChange={onChange} />
                <label htmlFor={id} className='placeholder'>{text} { showRequired() }</label>
            </div>
        </div>
    )
}

export default InpurForm
