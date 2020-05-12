import React from 'react'

function InformacionMD({
    nombreGeneral,
    especialidadGeneral, 
    cedulaGeneral,
    trabajoGeneral
    }) {
    return (
        <div className='informacionDoctor'>
            <h3>{nombreGeneral}</h3>
            <h4>{especialidadGeneral}</h4>
            <h5>Ced. prof.: {cedulaGeneral}</h5>
            &nbsp;
            <div className='trabajo-md'>
                <h5>Lugar de trabajo:</h5>
                <h4>{trabajoGeneral}</h4>
            </div>    
                    
        </div>
    )
}

export default InformacionMD
