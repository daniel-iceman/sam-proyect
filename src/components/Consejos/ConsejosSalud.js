import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function ConsejosSalud({
    SaludTitulo1, 
    SaludContenido1, 
    SaludTitulo2, 
    SaludContenido2,
    SaludTitulo3,
    SaludContenido3,}) {
    return(
        <div>
            <div className='consejo-usuario' id='Salud1'>
                <h1>{SaludTitulo1}</h1>
                <p>{SaludContenido1}</p>
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
            <div className='consejo-usuario' id='Salud2'>
                <h1>{SaludTitulo2}</h1>
                <p>{SaludContenido2}</p>
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
            <div className='consejo-usuario' id='Salud3'>
                <h1>{SaludTitulo3}</h1>
                <p>{SaludContenido3}</p>
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

export default ConsejosSalud