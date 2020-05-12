import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function ConsejosBelleza({
    BellezaTitulo1, 
    BellezaContenido1, 
    BellezaTitulo2, 
    BellezaContenido2,
    BellezaTitulo3,
    BellezaContenido3,}) {
    return(
        <div>
            <div className='consejo-usuario' id='Belleza1'>
                <h1>{BellezaTitulo1}</h1>
                <p>{BellezaContenido1}</p>
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
            <div className='consejo-usuario' id='Belleza2'>
                <h1>{BellezaTitulo2}</h1>
                <p>{BellezaContenido2}</p>
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
            <div className='consejo-usuario' id='Belleza3'>
                <h1>{BellezaTitulo3}</h1>
                <p>{BellezaContenido3}</p>
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

export default ConsejosBelleza