import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Menu from './components/BarraMenuYMenuDesplegable/Menu/Menu'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Registro from './pages/Registro'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Sintomas from './pages/ConsultaSintomas'
import Laboratorios from './pages/ConsultaLaboratorios'
import Consejos from './pages/Consejos'
import InicioSesion from './pages/InicioSesion'
import MiHistorial from './pages/MiHistorial'
import Medicos from './pages/Medicos'
import MedicinaGeneral from './pages/MedicinaGeneral'
import MedicinaInterna from './pages/MedicinaInterna'
import Cardiologia from './pages/Cardiologia'
import Ginecologia from './pages/Ginecologia'


class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                                       
                    <Menu />                          
                                                           
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signin" component={Registro} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/sintomas" component={Sintomas} />
                        <Route exact path="/laboratorios" component={Laboratorios} />
                        <Route exact path="/consejos" component={Consejos} />
                        <Route exact path="/medicos" component={Medicos} />
                        <Route exact path="/login" component={InicioSesion} />
                        <Route exact path="/mihistorial" component={MiHistorial} />
                        <Route exact path="/medgeneral" component={MedicinaGeneral} />
                        <Route exact path="/interna" component={MedicinaInterna} />
                        <Route exact path="/cardiologia" component={Cardiologia} />
                        <Route exact path="/ginecologia" component={Ginecologia} />
                        
                    </Switch>
                    <Footer />
                    
                </div>
            </Router>

        )
    }
}

export default App
                   
                    

