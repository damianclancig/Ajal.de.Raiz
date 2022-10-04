import React from 'react'
import "./InputForm.css"

const InpurForm = ({ id, text, value, required, onChange }) => {
    
    return (
        <div>
            <div className='input-container ic1'>
                <input id={id} name={id} value={value} className='input' type='text' placeholder=' ' onChange={onChange} />
                <label htmlFor={id} className='placeholder'>{text} { required ? <span className='input_requerido'>Es requerido</span> : '' }</label>
            </div>
        </div>
    )
}

export default InpurForm
