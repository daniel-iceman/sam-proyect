import React, { Component } from 'react'
import './Nosotros.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'

class Nosotros extends Component {
    render() {
        return (
            <div className='bodyContainer-Nosotros'>
               

               <header className='headerPage' id='headerReturn'>
                    <div className="header-coverNosotros">
                        <div className="header-overlayNosotros"></div>
                    </div>
                
                    <div className='header-textCoverNosotros' >
                        <h1>¿Que es S.A.M.?</h1>
                        <p>S.A.M. (Soporte Artificial Médico) es una app diseñada para orientar
                            al usuario, identificar padecimientos comunes y diferenciarlos de 
                            los padecimeintos que requieren atención médica personal, diagnosticar
                            padecimientos y emitir recomendaciones de tratamiento.
                        </p>
                        <div className='botonesHeader-Nosotros' >
                            <Link to='/signin' >
                                <button className='buttonSuscribe' type="button">
                                    Registrarme
                                </button>
                            </Link>                            
                            <div className='buttonConoce-Nosotros' >
                                <a href='#publicidad'> 
                                    <button type='button'>Conoce más</button>
                                </a>
                                   
                            </div>
                        </div>
                    </div>
                </header>
                
                <body>
                    <div className='intro-Nosotros' >
                        <p>Alguna vez te has sentido mal y has buscado tus síntomas en
                           la web?  Te has tomado estudios de laboratorio y no sabes 
                           si todo esta bien? <br/> S.A.M. te podrá ayudar si tienes 
                           algúna molestia orientandote sobre la posible causa y sugiriendo 
                           algún manejo así como recomendando la visita con un médico si esta lo requiriese.
                        </p>
                        <h2>Beneficios que te ofrece S.A.M. al estar subscrito</h2>
                        <li>Analizar y evaluar tus síntomas</li>
                        <li>Determinar la causa mas probable</li>
                        <li>Recomendar un manejo y evitar que te automediques</li>
                        <li>Analizar y evaluar tus laboratorios</li>
                        <li>Si algo estuviese fuera de rango, determinar la causa mas probable</li>
                        <li>Recomendar un manejo y evitar que te automediques</li>
                        <li>Canalizarte con un especialista</li>
                    </div>
                        

                    <div className="coverNosotros">
                        <div className="overlayNosotros"></div>
                    </div>
                
                    <div className='textoNosotros' >
                        
                        <h1>La Ciencia y la Tecnología aplicada para tí</h1>
                        <p>S.A.M. (Soporte Artificial Médico) es una aplicación 
                            médica cuyo algoritmo fué creado por el doctor Díaz con más 
                            de 20 años de experiencia en el campo de la médicina quien
                            incursionó tiempo después en el area de la programación y
                            estudios en inteligencia artificial. </p>
                        <p>S.A.M tiene un robusto soporte basado en publicaciones
                            cientificas y experiencia profesional y cuenta con el apoyo
                            de médicos especialistas que cubran las necesidades de los
                            usuarios.
                        </p>
                    </div>

                    <div className='textoPublicity' id="publicidad" >  
                        <div className='espacio' ></div>                  
                        <h1>¿Porqué debo suscribirme?</h1>
                        <p>En el siguiente video podras ver los beneficios que
                            puedes obtener al suscribirte en nuestra aplicación.
                        </p>
                    </div>
                    <div className='videoPublicity' >
                        <ReactPlayer
                            url='https://youtu.be/AgBUP8TJqV8'
                            className='react-player'
                            playing
                            width='50%'
                            height='100%'
                        />
                    </div>

                    <div className='btn-inicio'>
                        <a href='#headerReturn'> 
                            <button type='button'>
                                <FontAwesomeIcon 
                                    icon={ faHome } 
                                    style={{fontSize:'35px', 
                                    paddingRight:'0px',
                                    }}/>
                                Regresar al inicio
                            </button>
                        </a>

                    </div>

                </body>
                
            </div>
        )
    }
}

export default Nosotros
