import React, { useState } from 'react'
import './Consejos.css'
import ConsejoSalud from './ConsejosSalud'
import ConsejoEjercicio from './ConsejosEjercicio'
import ConsejoAlimentacion from './ConsejosAlimentacion'
import ConsejoBelleza from './ConsejosBelleza'
import BotonesConsejos from './BotonesConsejos'

function Consejos() {
    // BOTONES
    const[salud, setSalud] = useState(false);
    const[ejercicio, setEjercicio] = useState(false);
    const[alimentacion, setAlimentacion] = useState(false);
    const[belleza, setBelleza] = useState(false);

    // CONTENIDO DE CONSEJOS BOTON SALUD
    const[tituloConSalud1] = useState('Consejo No. 1 de Salud');
    const[contenidoConSalud1] = useState(
        "Sobre Salud 1 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConSalud2] = useState('Consejo No. 2 de Salud')
    const[contenidoConSalud2] = useState(
        "Sobre Salud 2 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConSalud3] = useState('Consejo No. 3 de Salud')
    const[contenidoConSalud3] = useState(
        "Sobre Salud 3 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );

    // CONTENIDO DE CONSEJOS BOTON EJERCICIO
    const[tituloConEjercicio1] = useState('Consejo No. 1 de Ejercicio');
    const[contenidoConEjercicio1] = useState(
        "Sobre Ejercicio 1 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConEjercicio2] = useState('Consejo No. 2 de Ejercicio')
    const[contenidoConEjercicio2] = useState(
        "Sobre Ejercicio 2 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConEjercicio3] = useState('Consejo No. 3 de Ejercicio')
    const[contenidoConEjercicio3] = useState(
        "Sobre Ejercicio 3 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );

    // CONTENIDO DE CONSEJOS BOTON ALIMENTACIÓN
    const[tituloConAlimentacion1] = useState('Consejo No. 1 de Alimentación');
    const[contenidoConAlimentacion1] = useState(
        "Sobre Alimentación 1 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConAlimentacion2] = useState('Consejo No. 2 de Alimentación')
    const[contenidoConAlimentacion2] = useState(
        "Sobre Alimentación 2 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConAlimentacion3] = useState('Consejo No. 3 de Alimentación')
    const[contenidoConAlimentacion3] = useState(
        "Sobre Alimentación 3 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );

    // CONTENIDO DE CONSEJOS BOTON BELLEZA
    const[tituloConBelleza1] = useState('Consejo No. 1 de Belleza');
    const[contenidoConBelleza1] = useState(
        "Sobre Belleza 1 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConBelleza2] = useState('Consejo No. 2 de Belleza')
    const[contenidoConBelleza2] = useState(
        "Sobre Belleza 2 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );
    const[tituloConBelleza3] = useState('Consejo No. 3 de Belleza')
    const[contenidoConBelleza3] = useState(
        "Sobre Belleza 3 Los triunfadores, son personas que hacen las cosas muy diferentes a los demás, para triunfar, se necesita ser diferente… muy diferente. Las personas promedio, normalmente quieren lograr mucho éxito y triunfo en sus vidas, sin que mucho cambie a su alrededor, ni en sus hábitos, y esto sencillamente no es posible."
    );

    return (
        <div className='contenedorConsejos'> 
            <header id='headerConsejos'>
                <h1>Consejos</h1>
            </header> 
            <BotonesConsejos 
                btnSaludAntes={salud} 
                btnSaludDespues={setSalud}
                saludMenu1={tituloConSalud1}
                saludMenu2={tituloConSalud2}
                saludMenu3={tituloConSalud3}
                btnEjercicioAntes={ejercicio} 
                btnEjercicioDespues={setEjercicio}
                ejercicioMenu1={tituloConEjercicio1}
                ejercicioMenu2={tituloConEjercicio2}
                ejercicioMenu3={tituloConEjercicio3} 
                btnAlimentacionAntes={alimentacion} 
                btnAlimentacionDespues={setAlimentacion}
                alimentacionMenu1={tituloConAlimentacion1}
                alimentacionMenu2={tituloConAlimentacion2}
                alimentacionMenu3={tituloConAlimentacion3}
                btnBellezaAntes={belleza} 
                btnBellezaDespues={setBelleza}
                bellezaMenu1={tituloConBelleza1}
                bellezaMenu2={tituloConBelleza2}
                bellezaMenu3={tituloConBelleza3}
                /> 
                    
                                            
            <div className='texto-recomendaciones'>
                <div className='bloque-información' >
                    <div id='Salud1'>
                        <ConsejoSalud 
                            SaludTitulo1={tituloConSalud1}
                            SaludContenido1={contenidoConSalud1} 
                            SaludTitulo2={tituloConSalud2}
                            SaludContenido2={contenidoConSalud2}
                            SaludTitulo3={tituloConSalud3}
                            SaludContenido3={contenidoConSalud3}                            
                        />  
                        <ConsejoEjercicio 
                            EjercicioTitulo1={tituloConEjercicio1}
                            EjercicioContenido1={contenidoConEjercicio1}
                            EjercicioTitulo2={tituloConEjercicio2}
                            EjercicioContenido2={contenidoConEjercicio2}
                            EjercicioTitulo3={tituloConEjercicio3}
                            EjercicioContenido3={contenidoConEjercicio3}
                        />
                        <ConsejoAlimentacion 
                            AlimentacionTitulo1={tituloConAlimentacion1}
                            AlimentacionContenido1={contenidoConAlimentacion1} 
                            AlimentacionTitulo2={tituloConAlimentacion2}
                            AlimentacionContenido2={contenidoConAlimentacion2}
                            AlimentacionTitulo3={tituloConAlimentacion3}
                            AlimentacionContenido3={contenidoConAlimentacion3}                       
                        />     
                        <ConsejoBelleza 
                            BellezaTitulo1={tituloConBelleza1}
                            BellezaContenido1={contenidoConBelleza1}
                            BellezaTitulo2={tituloConBelleza2}
                            BellezaContenido2={contenidoConBelleza2}
                            BellezaTitulo3={tituloConBelleza3}
                            BellezaContenido3={contenidoConBelleza3}
                        />                  
                    </div>                    
                </div>
            </div>      
                    
        </div>
    )
}

export default Consejos

                




