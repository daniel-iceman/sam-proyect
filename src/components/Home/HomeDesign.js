import React from 'react';
import './HomeDesign.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faVials } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";


import {Link} from 'react-router-dom'



function HomeDesign () {
    return (
        <div className='bodyContainer'>
            
            <section className='contentPage' >
                <div className='sam-enlinea' >
                    <h1>S.A.M. the doctor app</h1>
                    <h2>on line</h2>
                </div>
                
                <div className='seccion-consultasBotones' >
                    <div className='tituloConsultas'>
                        <div className='ayuda-pregunta' >
                            <h1>¿En que puedo ayudarte?</h1>
                        </div>
                    </div>                
                    <div className='botonesConsultas' >
                        <Link to='/sintomas' >
                            <button className='btn-1'>
                                <FontAwesomeIcon 
                                    className='FontAwesome1'
                                    icon={ faStethoscope } 
                                    /> 
                                ¿Que molestia tienes?
                            </button>
                        </Link>
                        

                        <Link to='/laboratorios' >
                            <button className='btn-2'>
                                <FontAwesomeIcon 
                                    className='FontAwesome1'
                                    icon={ faVials } 
                                    />                        
                                ¿Revisamos tus laboratorios?
                            </button>
                        </Link>

                        <Link to='/consejos' >
                            <button className='btn-3'>
                                <FontAwesomeIcon 
                                    className='FontAwesome1'
                                    icon={ faRunning } 
                                    />                        
                                Consejos para tu salud
                            </button>
                        </Link>

                        <Link to='/medicos' >
                            <button className='btn-4'>
                                <FontAwesomeIcon 
                                    className='FontAwesome1'
                                    icon={ faUserMd } 
                                    />
                                Consulta un Médico
                            </button>
                        </Link>
                    </div>
                </div> 

                <div className='botonesNuevoUsuario'>
                    <Link to='/signin' >
                                <button className='btn-5'>                                    
                                    Suscribete
                                </button>
                    </Link>
                    <Link to='/nosotros' >
                                <button className='btn-6'>                                    
                                    ¿Que es S.A.M.?
                                </button>
                    </Link>
                </div>        

            </section>

        </div>
    )
}


export default HomeDesign
