import React from 'react';
import './LogIn.css'
import {Link} from 'react-router-dom'

function LogIn (){
    
    return (        
        <div className='entry-container'>
            <div className='imageBackground'> </div>

            <div className='move-cover-LogIn' >
                <h1>Bienvenido</h1>
                <h2>Registrate y goza de todos los beneficios de la aplicación</h2>
                <Link to='/signin' >
                    <button className='buttonSuscribe' type="button">
                        Registrarme
                    </button>
                </Link> 
            </div>

            <div className='form-container-LogIn'>

                <div className='seccion-Ingreso' >
                    <h1>
                        Ingresar
                    </h1>
                    
                    <form className='Ingresar-cuenta' method='get' id='form-ingreso' >
                        <div>
                            <input type='email' placeholder='Email'  ></input>
                        </div>
                        <div>
                            <input type='password' placeholder='Contraseña' ></input>
                        </div>
                        <div className='btn-olvido-password'>
                            <button type="submit" value="olvido-contraseña">¿Olvidaste contraseña?</button>
                        </div>
                        <div className='btn-ingresar'>
                            <button type="submit" form="form-datos-generales" value="Submit">Ingresar</button>
                        </div>                      
                    </form>

                </div>    
                
            </div>
        </div>

    )
}

export default LogIn