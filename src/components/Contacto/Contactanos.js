import React, { useState } from 'react'
import './Contactanos.css'
import firebase from '../../firebase'

const Contactanos = () => {
    const [nombreContacto, setNombreContacto] = useState('')
    const [apellidoContacto, setApellidoContacto] = useState('')
    const [empresaContacto, setEmpresaContacto] = useState('')
    const [emailContacto, setEmailContacto] = useState('')
    const [motivoContacto, setMotivoContacto] = useState('')
    const [comentarioContacto, setComentarioContacto] = useState('')

    /* Esta es la función que llama el botón al ser presionado */
    function onSubmitContacto(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('contact')
            .add({
                nombreContacto,
                apellidoContacto,
                empresaContacto,
                emailContacto,
                motivoContacto,
                comentarioContacto
            })
            .then(() => {
                setNombreContacto('')
                setApellidoContacto('')
                setEmpresaContacto('')
                setEmailContacto('')
                setMotivoContacto('')
                setComentarioContacto('')                
            })
    } 

    return (
        <div className='contacto-containter'>            
            <form onSubmit={onSubmitContacto} method='get' id='form-contacto'>
                <h1>Contacto</h1>                
                <div className='contacto-input'>
                    <div className='contacto-input-bloque1' >
                        <input 
                            type='text' required
                            placeholder='*Nombre' 
                            value={nombreContacto} 
                            onChange={e => setNombreContacto(e.currentTarget.value)}
                            />
                        <input 
                            type='text' required
                            placeholder='*Apellido' 
                            value={apellidoContacto} 
                            onChange={e => setApellidoContacto(e.currentTarget.value)}
                            />
                        <input 
                            type='text' 
                            placeholder='Empresa'
                            value={empresaContacto} 
                            onChange={e => setEmpresaContacto(e.currentTarget.value)} 
                            />
                        <input 
                            type='email' required
                            placeholder='*Email' 
                            value={emailContacto} 
                            onChange={e => setEmailContacto(e.currentTarget.value)}
                            />
                        <select 
                            name='Motivo' required
                            value={motivoContacto} 
                            onChange={e => setMotivoContacto(e.currentTarget.value)} 
                            >
                                <option value='' disabled selected > *Motivo </option>
                                <option value='1' > Deseo conocer más del sistema </option>
                                <option value='2' > Represento a una empresa y me interesa participar </option>
                                <option value='3' > Soy médico y quiero ingresar como referencia </option>
                                <option value='4' > Otro </option>
                        </select>
                    </div>
                    <div className='contacto-input-bloque2'>
                        <textarea 
                            type='text' 
                            placeholder='Comentarios'
                            value={comentarioContacto} 
                            onChange={e => setComentarioContacto(e.currentTarget.value)} 
                            />
                    </div>
                    <div className='btn-enviar-comentarios'>
                        <button type="submit" form="form-contacto" value="Submit">Enviar</button>
                    </div>
                    <div className='mensaje-final-contacto' >
                        <p>Las casillas marcadas con un * son necesarias</p>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
                                             

export default Contactanos