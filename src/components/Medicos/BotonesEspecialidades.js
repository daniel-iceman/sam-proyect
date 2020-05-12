import React from 'react'
import {Link} from 'react-router-dom'

function BotonesEspecialidades() {
    return (
        <div className='botonesEspecialidades'>
            <Link to='/medgeneral' >
                <button>
                    Medicina General
                </button>
            </Link>
            <Link to='/interna' >
                <button>
                    Medicina Interna
                </button>
            </Link>
            <Link to='/cardiologia' >
                <button>
                    Cardiología
                </button>
            </Link>
            <Link to='/cardiologia' >
                <button>
                    Ginecología
                </button>
            </Link>
                        
        </div>
    )
}

export default BotonesEspecialidades
