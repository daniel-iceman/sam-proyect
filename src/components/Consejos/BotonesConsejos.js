import React from 'react'

function BotonesConsejos({
    btnSaludAntes,
    btnSaludDespues,
    saludMenu1,
    saludMenu2,
    saludMenu3,
    btnEjercicioAntes,
    btnEjercicioDespues,
    ejercicioMenu1,
    ejercicioMenu2,
    ejercicioMenu3,
    btnAlimentacionAntes,
    btnAlimentacionDespues,
    alimentacionMenu1,
    alimentacionMenu2,
    alimentacionMenu3,
    btnBellezaAntes,
    btnBellezaDespues,
    bellezaMenu1,
    bellezaMenu2,
    bellezaMenu3
    }) {
    return(
        <div className='bloque-botones'>
            <div className='BotonSalud'>      
                <button 
                    className='btn-salud' 
                    onClick={() => btnSaludDespues(btnSaludAntes => !btnSaludAntes )}
                    >Salud
                </button>
                <div>{btnSaludAntes && <>
                        <ul>
                            <li><a href='#Salud1'>{saludMenu1}</a></li>
                            <li><a href='#Salud2'>{saludMenu2}</a></li>
                            <li><a href='#Salud3'>{saludMenu3}</a></li>
                        </ul>
                    </>}            
                </div>                                  
            </div>
            <div className='BotonEjercicio'>
                <button 
                    className='btn-ejercicio' 
                    onClick={() => btnEjercicioDespues(btnEjercicioAntes => !btnEjercicioAntes )} 
                    >Ejercicio
                </button>
                <div>
                    {btnEjercicioAntes && <>
                        <ul>
                            <li><a href='#Ejercicio1'>{ejercicioMenu1}</a></li>
                            <li><a href='#Ejercicio2'>{ejercicioMenu2}</a></li>
                            <li><a href='#Ejercicio3'>{ejercicioMenu3}</a></li>
                        </ul>
                    </>}            
                </div>
            </div>
            <div className='BotonAlimentacion'>
                <button 
                    className='btn-alimentacion' 
                    onClick={() => btnAlimentacionDespues(btnAlimentacionAntes => !btnAlimentacionAntes )} 
                    >Alimentación
                </button>
                <div>
                    {btnAlimentacionAntes && <>
                        <ul>
                            <li><a href='#Alimentacion1'>{alimentacionMenu1}</a></li>
                            <li><a href='#Alimentacion2'>{alimentacionMenu2}</a></li>
                            <li><a href='#Alimentacion3'>{alimentacionMenu3}</a></li>
                        </ul>
                    </>}            
                </div>
            </div>
            <div className='BotonBelleza'>
                <button 
                    className='btn-belleza' 
                    onClick={() => btnBellezaDespues(btnBellezaAntes => !btnBellezaAntes )} 
                    >Belleza
                </button>
                <div>
                    {btnBellezaAntes && <>
                        <ul>
                            <li><a href='#Belleza1'>{bellezaMenu1}</a></li>
                            <li><a href='#Belleza2'>{bellezaMenu2}</a></li>
                            <li><a href='#Belleza3'>{bellezaMenu3}</a></li>
                        </ul>
                    </>}            
                </div>
            </div>

        </div>
    )
}

export default BotonesConsejos