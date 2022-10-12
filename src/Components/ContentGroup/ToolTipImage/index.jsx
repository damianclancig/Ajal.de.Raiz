import React from 'react'

import './ToolTipImage.css'

const ToolTipImage = ({ product }) => {
    return (
        <>
            <span className="mytooltip tooltip-effect-1">
                <span className="tooltip-item">Ver imagen</span>
                <span className="tooltip-content clearfix">
                    <img alt={product.title} src={product.image} title={product.image} />
                </span>
            </span>

        </>
    )
}

export default ToolTipImage
