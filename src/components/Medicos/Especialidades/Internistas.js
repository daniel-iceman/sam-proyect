import React, { useState } from 'react'
import './Especialidades.css'
import FotoMD from './FotoMD'
import InformacionMD from './InformacionMD'
import ContactoMD from './ContactoMD'


function MedicosInternistas() {    
    const fotoInternista_1 = require(`../med_images/Internistas/doc2.jpg`)
    const [nombreInternista_1] = useState('Dr. Fernando Alcocer')
    const [especialidadInternista_1] = useState('Medicina Interna')
    const [cedulaInternista_1] = useState('266583')
    const [trabajoInternista_1] = useState('Hospital Angeles Pedregal')
    const [telefonoInternista_1] = useState('5556289114')
    const [honorarioInternista_1] = useState('$150')


    return (
        <div>
            <div className='tituloMedicos'>
                <h1>Medicina Interna</h1>
            </div>
            <div className='contenedor-medicos'>
                <FotoMD imagen={fotoInternista_1} />
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreInternista_1}
                        especialidadGeneral={especialidadInternista_1}
                        cedulaGeneral={cedulaInternista_1}
                        trabajoGeneral={trabajoInternista_1}
                        telefonoGeneral={telefonoInternista_1}
                    />
                    <ContactoMD honorarios={honorarioInternista_1} />
                </div>
            </div>
            <div className='contenedor-medicos'>
                <FotoMD imagen={fotoInternista_1} />
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreInternista_1}
                        especialidadGeneral={especialidadInternista_1}
                        cedulaGeneral={cedulaInternista_1}
                        trabajoGeneral={trabajoInternista_1}
                        telefonoGeneral={telefonoInternista_1}
                    />
                    <ContactoMD honorarios={honorarioInternista_1} />
                </div>
            </div>
            
        </div>
    )
}

export default MedicosInternistas