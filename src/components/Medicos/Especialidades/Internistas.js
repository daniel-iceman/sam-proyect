import React, { useState } from 'react'
import './Especialidades.css'
import FotoMD from './FotoMD'
import InformacionMD from './InformacionMD'
import ContactoMD from './ContactoMD'

import Popup from "reactjs-popup";

function MedicosInternistas() {  
    
    // Aqui se pone la información del internista 1
    const fotoInternista_1 = require(`../med_images/Internistas/doc2.jpg`)
    const [nombreInternista_1] = useState('Dr. Fernando Alcocer')
    const [especialidadInternista_1] = useState('Medicina Interna')
    const [cedulaInternista_1] = useState('266583')
    const [trabajoInternista_1] = useState('Hospital Angeles Pedregal')
    const [honorarioInternista_1] = useState('$120')    
    const [universidadInternista_1] = useState('Universidad La Salle')
    const [postgradoInternista_1_1] = useState('Artes Marciales')
    const [postgradoInternista_1_2] = useState('Actualización en Diabetes')
    const [postgradoInternista_1_3] = useState('Actualización en Hipertensión')

    // Aqui se pone la información del internista 2
    const fotoInternista_2 = require(`../med_images/Internistas/doc2.jpg`)
    const [nombreInternista_2] = useState('Dr. Roberto Landeros')
    const [especialidadInternista_2] = useState('Medicina Interna')
    const [cedulaInternista_2] = useState('356525')
    const [trabajoInternista_2] = useState('Hospital ABC')
    const [honorarioInternista_2] = useState('$120')    
    const [universidadInternista_2] = useState('Universidad Anahuac')
    const [postgradoInternista_2_1] = useState('Ninjitsu')
    const [postgradoInternista_2_2] = useState('Actualización en Dislipidemias')
    const [postgradoInternista_2_3] = useState('Actualización en Metabolismo')

    return (
        <div>
            <div className='tituloMedicos'>
                <h1>Medicina Interna</h1>
            </div>
            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadInternista_1}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoInternista_1_1}</h4>
                            <h4>{postgradoInternista_1_2}</h4>
                            <h4>{postgradoInternista_1_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoInternista_1} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreInternista_1}
                        especialidadGeneral={especialidadInternista_1}
                        cedulaGeneral={cedulaInternista_1}
                        trabajoGeneral={trabajoInternista_1}
                    />
                    <ContactoMD honorarios={honorarioInternista_1} />
                </div>
            </div>

            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadInternista_2}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoInternista_2_1}</h4>
                            <h4>{postgradoInternista_2_2}</h4>
                            <h4>{postgradoInternista_2_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoInternista_2} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreInternista_2}
                        especialidadGeneral={especialidadInternista_2}
                        cedulaGeneral={cedulaInternista_2}
                        trabajoGeneral={trabajoInternista_2}
                    />
                    <ContactoMD honorarios={honorarioInternista_2} />
                </div>
            </div>
            
        </div>
    )
}

export default MedicosInternistas