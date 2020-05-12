import React, { useState } from 'react'
import './Especialidades.css'
import FotoMD from './FotoMD'
import InformacionMD from './InformacionMD'
import ContactoMD from './ContactoMD'

import Popup from "reactjs-popup";

function Cardiologos() {  
    
    // Aqui se pone la información del cardiologo 1
    const fotoCardiologo_1 = require(`../med_images/Cardiologos/doc4.jpg`)
    const [nombreCardiologo_1] = useState('Dr. Alejandro Gómez')
    const [especialidadCardiologo_1] = useState('Cardiología')
    const [cedulaCardiologo_1] = useState('266583')
    const [trabajoCardiologo_1] = useState('Hospital Angeles Pedregal')
    const [honorarioCardiologo_1] = useState('$120')    
    const [universidadCardiologo_1] = useState('Universidad La Salle')
    const [postgradoCardiologo_1_1] = useState('Artes Marciales')
    const [postgradoCardiologo_1_2] = useState('Actualización en Diabetes')
    const [postgradoCardiologo_1_3] = useState('Actualización en Hipertensión')

    // Aqui se pone la información del cardiologo 2
    const fotoCardiologo_2 = require(`../med_images/Cardiologos/doc4.jpg`)
    const [nombreCardiologo_2] = useState('Dr. Arturo Iturbide')
    const [especialidadCardiologo_2] = useState('Cardiología')
    const [cedulaCardiologo_2] = useState('356525')
    const [trabajoCardiologo_2] = useState('Hospital ABC')
    const [honorarioCardiologo_2] = useState('$120')    
    const [universidadCardiologo_2] = useState('Universidad Anahuac')
    const [postgradoCardiologo_2_1] = useState('Ninjitsu')
    const [postgradoCardiologo_2_2] = useState('Actualización en Dislipidemias')
    const [postgradoCardiologo_2_3] = useState('Actualización en Metabolismo')

    return (
        <div>
            <div className='tituloMedicos'>
                <h1>Cardiología</h1>
            </div>
            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadCardiologo_1}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoCardiologo_1_1}</h4>
                            <h4>{postgradoCardiologo_1_2}</h4>
                            <h4>{postgradoCardiologo_1_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoCardiologo_1} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreCardiologo_1}
                        especialidadGeneral={especialidadCardiologo_1}
                        cedulaGeneral={cedulaCardiologo_1}
                        trabajoGeneral={trabajoCardiologo_1}
                    />
                    <ContactoMD honorarios={honorarioCardiologo_1} />
                </div>
            </div>

            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadCardiologo_2}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoCardiologo_2_1}</h4>
                            <h4>{postgradoCardiologo_2_2}</h4>
                            <h4>{postgradoCardiologo_2_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoCardiologo_2} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreCardiologo_2}
                        especialidadGeneral={especialidadCardiologo_2}
                        cedulaGeneral={cedulaCardiologo_2}
                        trabajoGeneral={trabajoCardiologo_2}
                    />
                    <ContactoMD honorarios={honorarioCardiologo_2} />
                </div>
            </div>
            
        </div>
    )
}

export default Cardiologos