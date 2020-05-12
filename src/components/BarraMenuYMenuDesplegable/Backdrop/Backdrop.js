import React from 'react'
import './Backdrop.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/*const backdrop = props => ( 
    <div className='backdrop' onClick={props.click} />
);*/
const backdrop = props => ( 
    <div className='backdrop' onClick={props.click}>
        <h1> <FontAwesomeIcon icon={ faTimes } 
                /*style={{fontSize:'40px'}}*/ /> 
        </h1>
        <p>Cerrar menú</p>
    </div>
);

export default backdrop