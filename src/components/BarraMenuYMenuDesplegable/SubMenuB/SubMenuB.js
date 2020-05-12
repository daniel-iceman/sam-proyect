import React from 'react';
import './SubMenuB.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'


class DropdownPerfil extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenuPerfil: false,
     };

  this.showDropdownMenuPerfil = this.showDropdownMenuPerfil.bind(this);
  this.hideDropdownMenuPerfil = this.hideDropdownMenuPerfil.bind(this);

};

showDropdownMenuPerfil(event) {
    event.preventDefault();
    this.setState({ displayMenuPerfil: true }, () => {
    document.addEventListener('click', this.hideDropdownMenuPerfil);
    });
  }

  hideDropdownMenuPerfil() {
    this.setState({ displayMenuPerfil: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuPerfil);
    });

  }

  render() {
    return (
        <div  className="dropdownPerfil" style = {{width:"80px"}} > 
         <div className="buttonSMPerfil" onClick={this.showDropdownMenuPerfil} > <FontAwesomeIcon icon={faUser} style={{fontSize:'22px'}} /> </div>

          { this.state.displayMenuPerfil ? (
          <ul className='SubMenuUlPerfil'>
            <Link className='link' to='/login' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} > <FontAwesomeIcon icon={faSignInAlt} style={{marginRight:'6px'}} /> Iniciar Sesión</li>
            </Link>
            <Link className='link' to='/signin' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} > <FontAwesomeIcon icon={faUserEdit} style={{marginRight:'6px'}} /> Registro</li>
            </Link>
            <Link className='link' to='/mihistorial' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} > <FontAwesomeIcon icon={faClock} style={{marginRight:'6px'}} /> Mi Historial</li>
            </Link>
            
            <li>Salir <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight:'6px'}} /> </li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
         

    );
  }
}

export default DropdownPerfil;