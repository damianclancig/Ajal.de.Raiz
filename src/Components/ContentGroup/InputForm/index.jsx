import React, { useEffect, useState } from 'react'
import "./InputForm.scss"

const InpurForm = ({ id, text, value, required, onChange }) => {

    const [textRequired, setTextRequired ] = useState('')

    useEffect(() => {
        if (required !== undefined) {
            setTextRequired(required && !value ? <span className='input_requerido'>Es requerido</span> : '*')
            // return required && !value ? <span className='input_requerido'>Es requerido</span> : '*'
        }
    }, [required, value])

    return (
        <>
            <div className='input-container ic1'>
                <input id={id} name={id} value={value} className='input' type='text' placeholder=' ' onChange={onChange} />
                <label htmlFor={id} className='placeholder'>{text} { textRequired }</label>
            </div>
        </>
    )
}

export default InpurForm
