import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function ConsejosAlimentacion({
    AlimentacionTitulo1, 
    AlimentacionContenido1, 
    AlimentacionTitulo2, 
    AlimentacionContenido2,
    AlimentacionTitulo3,
    AlimentacionContenido3,}) {
    return(
        <div>
            <div className='consejo-usuario' id='Alimentacion1'>
                <h1>{AlimentacionTitulo1}</h1>
                <p>{AlimentacionContenido1}</p>
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
            <div className='consejo-usuario' id='Alimentacion2'>
                <h1>{AlimentacionTitulo2}</h1>
                <p>{AlimentacionContenido2}</p>
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
            <div className='consejo-usuario' id='Alimentacion3'>
                <h1>{AlimentacionTitulo3}</h1>
                <p>{AlimentacionContenido3}</p>
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

export default ConsejosAlimentacion