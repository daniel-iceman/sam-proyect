import React from 'react'
import MenuBar from  '../Toolbar/MenuBar'

import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'



/* El "state" "sideDrawerOpen: false" mantiene el recuadro del menu emergente cerrado
y el "drawerToogleClickHandler" lo abre ya que retorna un estado opuesto al cerrado
"!prevState.sideDrawerOpen".
El "backdropClickHandler" cierra el menu emergente una vez que esta abierto.
*/
class Menu extends React.Component{ 
    state = {
        /*Estado inicial del menú de Navegación */
        sideDrawerOpen: false,

        
    };

    /* Controlde apertura del menú de navegación */
    drawerToogleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});                
    };

    

    render(){
        
        let backdrop;

        
        /* Condicional para despliegue del menú de Navegación */
        if (this.state.sideDrawerOpen) {           
            backdrop = <Backdrop click = {this.backdropClickHandler} />
        }

        
        return( 
            <div style = {{height: '100%'}}>
                <MenuBar drawerClickHandler = {this.drawerToogleClickHandler}  />
                
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

                
            </div>
    
        )
    }
    
}

                       
export default Menu
                       
                         
                