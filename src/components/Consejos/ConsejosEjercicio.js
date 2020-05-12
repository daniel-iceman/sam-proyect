import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function ConsejosEjercicio({
    EjercicioTitulo1, 
    EjercicioContenido1, 
    EjercicioTitulo2, 
    EjercicioContenido2,
    EjercicioTitulo3,
    EjercicioContenido3,}) {
    return(
        <div>
            <div className='consejo-usuario' id='Ejercicio1'>
                <h1>{EjercicioTitulo1}</h1>
                <p>{EjercicioContenido1}</p>
                <div className='btn-return'>
                    <a href='#headerConsejos'> 
                        <button type='button'>
                            <FontAwesomeIcon 
                                icon={ faUndoAlt } 
                                style={{fontSize:'35px', 
                                paddingRight:'0px',
                                }}/>
                        </button>
                    </a>
                </div>
            </div>
            <div className='consejo-usuario' id='Ejercicio2'>
                <h1>{EjercicioTitulo2}</h1>
                <p>{EjercicioContenido2}</p>
                <div className='btn-return'>
                    <a href='#headerConsejos'> 
                        <button type='button'>
                            <FontAwesomeIcon 
                                icon={ faUndoAlt } 
                                style={{fontSize:'35px', 
                                paddingRight:'0px',
                                }}/>
                        </button>
                    </a>
                </div>
            </div>
            <div className='consejo-usuario' id='Ejercicio3'>
                <h1>{EjercicioTitulo3}</h1>
                <p>{EjercicioContenido3}</p>
                <div className='btn-return'>
                    <a href='#headerConsejos'> 
                        <button type='button'>
                            <FontAwesomeIcon 
                                icon={ faUndoAlt } 
                                style={{fontSize:'35px', 
                                paddingRight:'0px',
                                }}/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ConsejosEjercicio