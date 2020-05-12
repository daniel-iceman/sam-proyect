import React from 'react'

function ContactoMD({honorarios}) {
    return (
        <div className='boton-honorarios'>
            <h5>En línea</h5>
            <button>{honorarios}</button>
        </div>
    )
}

export default ContactoMD
