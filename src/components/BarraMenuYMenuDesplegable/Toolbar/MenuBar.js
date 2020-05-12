import React from 'react'
import './MenuBar.css'
import SubMenu from '../SubMenu/SubMenu'
import SubMenuPerfil from '../SubMenuB/SubMenuB'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'


const MenuBar = props => (
    <header className = "menubar">
        <nav className = "menubar_navigation">

            <div className='menubar_toogle_button'>
                <DrawerToggleButton click={props.drawerClickHandler} />          
            </div>            

            <div className="menubar_logo"><a href ="/">The Logo</a></div>

            <div className='spacer'></div>

            <div className='menubar_navigation_items'>
                <ul>
                    <Link className='separacion1' to='/' >
                        <li> <FontAwesomeIcon icon={faHome} style={{marginRight:'6px'}} /> </li>
                    </Link>
                    <SubMenu />
                    <Link className='separacion2' to='/nosotros' >
                        <li>Acerca</li>
                    </Link>
                    <Link className='separacion2' to='/contacto' >
                        <li>Contacto</li>
                    </Link>
                    <SubMenuPerfil click={props.UsuarioMenu} className='separacion5' />            
                </ul>             
            </div>
            
        </nav>

    </header>
);

export default MenuBar
            
                    
                    


                    
                    
                   









