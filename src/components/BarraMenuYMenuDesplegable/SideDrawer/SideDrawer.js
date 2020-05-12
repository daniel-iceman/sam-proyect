import React from 'react'
import './SideDrawer.css'
import FondoUsuario from '../../images/UserBackgroundOrange.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faVials } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'

const sideDrawer = props => { 
    let drawerClasses = 'side-drawer';
    
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        
        <nav className={drawerClasses} id='bloqueMenu' > 
            
            <div className='seccionSignIn' >
                <div className='NombreUsuario'  >
                    <h1>Nombre Usuario</h1>
                    <div  className='SignIn' >
                        <Link to='/login' >
                            <li style={{listStyle:'none'}} > 
                                <FontAwesomeIcon icon={faSignInAlt} 
                                style={{fontSize:'19px', 
                                paddingRight:'10px',
                                color:'gray'
                                }}/> 
                                Iniciar Sesión </li>
                        </Link>
                    </div>
                </div>

                <div className="fondoUsuario"
                        style = {{
                        backgroundImage: `url(${FondoUsuario})`}}>

                    <div className="overlayFondoUsuario"></div>
                </div>                
            </div>
       
        
            <div className='SeccionHome' >
                <ul>
                    <Link to='/' >
                        <li> <FontAwesomeIcon icon={ faHome } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px' }}/> 
                            Inicio</li>
                    </Link> 
                </ul>
            </div>                  

            <div className='SeccionConsulta' > 
                <p>Consulta</p>
                <ul>             
                    <Link to='/sintomas' >
                        <li> <FontAwesomeIcon icon={ faStethoscope } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px'}}/>
                            Sintomas</li>
                    </Link>
                    <Link to='/laboratorios' >
                        <li> <FontAwesomeIcon icon={ faVials } 
                            style={{fontSize:'19px', 
                            paddingRight:'26px'}}/>
                            Laboratorios</li>
                    </Link>
                    <Link to='/mihistorial' >
                    <li> <FontAwesomeIcon icon={ faClock } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px'}}/>
                            Mi Historial</li>
                    </Link>
                </ul>
            </div>
            
            <div className='SeccionDescubre' >
                <p>Descubre</p>
                <ul>
                    <Link to='/consejos' >
                    <li> <FontAwesomeIcon icon={ faRunning } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px'}}/>
                            Cuida tu salud</li>
                    </Link>
                    <Link to='/medicos' >
                    <li> <FontAwesomeIcon icon={ faUserMd } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px'}}/>
                            Médicos </li>
                    </Link>
                </ul>
            </div>
            <div className='SeccionNosotros'>   
                <ul>
                    <Link to='/nosotros' >
                        <li> <FontAwesomeIcon icon={ faQuestionCircle } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px'}}/>
                            Acerca</li>
                    </Link>
                    <Link to='/contacto' >
                        <li> <FontAwesomeIcon icon={ faComment } 
                            style={{fontSize:'19px', 
                            paddingRight:'30px'}}/>
                            Contacto</li>
                    </Link>
                                    
                    <li> <FontAwesomeIcon icon={ faSignOutAlt } 
                        style={{marginRight:'30px'}}/>
                        Salir</li>
                </ul>
            </div>
            
        </nav>
                
    );
    
};

export default sideDrawer