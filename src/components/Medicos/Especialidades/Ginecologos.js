import React, { useState } from 'react'
import './Especialidades.css'
import FotoMD from './FotoMD'
import InformacionMD from './InformacionMD'
import ContactoMD from './ContactoMD'

import Popup from "reactjs-popup";

function Ginecologos() {  
    
    // Aqui se pone la información del Ginecologo 1
    const fotoGinecologo_1 = require(`../med_images/Ginecologos/doc1.jpg`)
    const [nombreGinecologo_1] = useState('Dra. Barbara Unzain')
    const [especialidadGinecologo_1] = useState('Ginecología')
    const [cedulaGinecologo_1] = useState('266583')
    const [trabajoGinecologo_1] = useState('Hospital Angeles Pedregal')
    const [honorarioGinecologo_1] = useState('$120')    
    const [universidadGinecologo_1] = useState('Universidad La Salle')
    const [postgradoGinecologo_1_1] = useState('Artes Marciales')
    const [postgradoGinecologo_1_2] = useState('Actualización en Diabetes')
    const [postgradoGinecologo_1_3] = useState('Actualización en Hipertensión')

    // Aqui se pone la información del Ginecologo 2
    const fotoGinecologo_2 = require(`../med_images/Ginecologos/doc1.jpg`)
    const [nombreGinecologo_2] = useState('Dra. Leticia Maldonado')
    const [especialidadGinecologo_2] = useState('Ginecología')
    const [cedulaGinecologo_2] = useState('356525')
    const [trabajoGinecologo_2] = useState('Hospital ABC')
    const [honorarioGinecologo_2] = useState('$120')    
    const [universidadGinecologo_2] = useState('Universidad Anahuac')
    const [postgradoGinecologo_2_1] = useState('Ninjitsu')
    const [postgradoGinecologo_2_2] = useState('Actualización en Dislipidemias')
    const [postgradoGinecologo_2_3] = useState('Actualización en Metabolismo')

    return (
        <div>
            <div className='tituloMedicos'>
                <h1>Ginecología</h1>
            </div>
            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadGinecologo_1}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoGinecologo_1_1}</h4>
                            <h4>{postgradoGinecologo_1_2}</h4>
                            <h4>{postgradoGinecologo_1_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoGinecologo_1} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreGinecologo_1}
                        especialidadGeneral={especialidadGinecologo_1}
                        cedulaGeneral={cedulaGinecologo_1}
                        trabajoGeneral={trabajoGinecologo_1}
                    />
                    <ContactoMD honorarios={honorarioGinecologo_1} />
                </div>
            </div>

            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadGinecologo_2}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoGinecologo_2_1}</h4>
                            <h4>{postgradoGinecologo_2_2}</h4>
                            <h4>{postgradoGinecologo_2_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoGinecologo_2} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreGinecologo_2}
                        especialidadGeneral={especialidadGinecologo_2}
                        cedulaGeneral={cedulaGinecologo_2}
                        trabajoGeneral={trabajoGinecologo_2}
                    />
                    <ContactoMD honorarios={honorarioGinecologo_2} />
                </div>
            </div>
            
        </div>
    )
}

export default Ginecologos