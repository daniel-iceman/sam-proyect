import React from 'react'

function FotoMD({imagen}) {
    return (
        <div className='ImagenDoctor'>
            <img 
                alt='logo'
                src={imagen} 
            />
        </div>
    )
}

export default FotoMD
