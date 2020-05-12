import React, { useState } from 'react'
import './Especialidades.css'
import FotoMD from './FotoMD'
import InformacionMD from './InformacionMD'
import ContactoMD from './ContactoMD'

import Popup from "reactjs-popup";

function MedicosGenerales() {  
        
    // Aqui se pone la información del médico general 1
    
    const fotoMDgeneral_1 = require(`../med_images/Generales/doc3.jpg`)
    const [nombreMDgeneral_1] = useState('Dra. Alejandra Montebaños')
    const [especialidadMDgeneral_1] = useState('Medico General')
    const [cedulaMDgeneral_1] = useState('356289')
    const [trabajoMDgeneral_1] = useState('Hospital Mocel')
    const [honorarioMDgeneral_1] = useState('$80')    
    const [universidadMDgeneral_1] = useState('Universidad La Salle')
    const [postgradoMDgeneral_1_1] = useState('Cocina')
    const [postgradoMDgeneral_1_2] = useState('Macrame')
    const [postgradoMDgeneral_1_3] = useState('Reposteria')

    // Aqui se pone la información del médico general 2
    const fotoMDgeneral_2 = require(`../med_images/Generales/doc3.jpg`)
    const [nombreMDgeneral_2] = useState('Dra. Rocio Fernandez')
    const [especialidadMDgeneral_2] = useState('Medico General')
    const [cedulaMDgeneral_2] = useState('486261')
    const [trabajoMDgeneral_2] = useState('Hospital Metropolitano')
    const [honorarioMDgeneral_2] = useState('$80')
    const [universidadMDgeneral_2] = useState('UNAM')
    const [postgradoMDgeneral_2_1] = useState('Artes ocultas')
    const [postgradoMDgeneral_2_2] = useState('Hechiceria')
    const [postgradoMDgeneral_2_3] = useState('Herbolaria')

    return (
        <div>
            <div className='tituloMedicos'>
                <h1>Medicina General</h1>
            </div>

            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadMDgeneral_1}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoMDgeneral_1_1}</h4>
                            <h4>{postgradoMDgeneral_1_2}</h4>
                            <h4>{postgradoMDgeneral_1_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoMDgeneral_1} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreMDgeneral_1}
                        especialidadGeneral={especialidadMDgeneral_1}
                        cedulaGeneral={cedulaMDgeneral_1}
                        trabajoGeneral={trabajoMDgeneral_1}
                    />
                    <ContactoMD honorarios={honorarioMDgeneral_1} />                    
                </div>
            </div>

            <div className='contenedor-medicos'>
                <div className='foto-curriculum'>
                    <Popup  trigger={<button className='Popup-btn'> Curriculum </button>} position="right top" >
                        <div className='pop-up-curriculum'>
                            <h5>Egresado:</h5>
                            <h4>{universidadMDgeneral_2}</h4>
                            &nbsp;
                            <h5>Postgrados:</h5>
                            <h4>{postgradoMDgeneral_2_1}</h4>
                            <h4>{postgradoMDgeneral_2_2}</h4>
                            <h4>{postgradoMDgeneral_2_3}</h4>
                        </div>
                    </Popup>
                    <FotoMD imagen={fotoMDgeneral_2} />
                </div>
                <div className='info-contacto' >
                    <InformacionMD 
                        nombreGeneral={nombreMDgeneral_2}
                        especialidadGeneral={especialidadMDgeneral_2}
                        cedulaGeneral={cedulaMDgeneral_2}
                        trabajoGeneral={trabajoMDgeneral_2}
                    />
                    <ContactoMD honorarios={honorarioMDgeneral_2} />                    
                </div>
            </div>

            
            
        </div>
    )
}

export default MedicosGenerales
