import React from 'react'
import { AppContext } from '../../../context/AppContext';

import './Loading.css'

const Loading = () => {
    const { loading } = React.useContext(AppContext);

    return (
        <>
            {loading ?
                <>
                    <div className='modal display-block'>
                        <div className='loading'>Cargando ...</div>
                    </div>
                </>
                : ''
            }
        </>
    )
}

export default Loading
