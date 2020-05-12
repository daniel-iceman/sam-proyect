import React, { useState } from 'react';
import firebase from '../../firebase'
import './SignIn.css'
import {Link} from 'react-router-dom'


const SignInForm = () => {
    const [nombre, setNombre] = useState('')
    const [apellidoP, setApellidoP] = useState('')
    const [apellidoM, setApellidoM] = useState('')
    const [dayBirth, setDayBirth] = useState('')
    const [monthBirth, setMonthBirth] = useState('')
    const [yearBirth, setYearBirth] = useState('')
    const [sexo, setSexo] = useState('')
    const [genero, setGenero] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    /* Esta es la función que llama el botón al ser presionado */
    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('users')
            .add({
                nombre,
                apellidoP,
                apellidoM,
                dayBirth: parseInt(dayBirth),
                monthBirth: parseInt(monthBirth),
                yearBirth: parseInt(yearBirth),
                sexo,
                genero,
                email,
                password
            })
            .then(() => {
                setNombre('')
                setApellidoP('')
                setApellidoM('')
                setDayBirth('')
                setMonthBirth('')
                setYearBirth('')
                setSexo('')
                setGenero('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            })
    }    

    return (
        <div className='entry-container'>
            <div className='imageBackground'> </div>

            <div className='move-cover-SignIn' >
                <h1>Hola de nuevo</h1>
                
                <h2>Ingresa a tu cuenta, será un placer ayudarte</h2>
                
                <Link to='/login' >
                    <button className='buttonSuscribe' type="button">
                        Ingresar
                    </button>
                </Link> 
            </div>

            <div className='form-container-SignIn'>

                <div className='seccion-Registro' >
                    <div>
                        <h1>
                            Crear una Cuenta
                        </h1>
                    </div>
                    <form onSubmit={onSubmit} method='get' id='form-datos-generales' >                
                        <div className='fila-1' >
                            <div>
                                <input 
                                    type='text' 
                                    placeholder='Nombre' 
                                    value={nombre} 
                                    onChange={e => setNombre(e.currentTarget.value)}
                                ></input>
                            </div>
                            <div>
                                <input 
                                    type='text' 
                                    placeholder='Apellido Paterno' 
                                    value={apellidoP} 
                                    onChange={e => setApellidoP(e.currentTarget.value)}
                                ></input>
                            </div>
                            <div>
                                <input 
                                    type='text' 
                                    placeholder='Apellido Materno'
                                    value={apellidoM} 
                                    onChange={e => setApellidoM(e.currentTarget.value)} 
                                ></input>
                            </div>
                        </div>

                        <div className='fila-2'>
                            <div className='fecha-nacimiento-Posicion' >
                                <div>
                                    <p>Fecha de Nacimiento</p>
                                </div>
                                <div className='dia-mes-año-Posicion'>
                                    <div>
                                        <select 
                                            name='Day' required
                                            value={dayBirth} 
                                            onChange={e => setDayBirth(e.currentTarget.value)}                                                                          
                                            >
                                                <option value='' disabled selected > Día </option>
                                                <option value='1' > 1 </option>
                                                <option value='2' > 2 </option>
                                                <option value='3' > 3 </option>
                                                <option value='4' > 4 </option>
                                                <option value='5' > 5 </option>
                                                <option value='6' > 6 </option>
                                                <option value='7' > 7 </option>
                                                <option value='8' > 8 </option>
                                                <option value='9' > 9 </option>
                                                <option value='10' > 10 </option>
                                                <option value='11' > 11 </option>
                                                <option value='12' > 12 </option>
                                                <option value='13' > 13 </option>
                                                <option value='14' > 14 </option>
                                                <option value='15' > 15 </option>
                                                <option value='16' > 16 </option>
                                                <option value='17' > 17 </option>
                                                <option value='18' > 18 </option>
                                                <option value='19' > 19 </option>
                                                <option value='20' > 20 </option>
                                                <option value='21' > 21 </option>
                                                <option value='22' > 22 </option>
                                                <option value='23' > 23 </option>
                                                <option value='24' > 24 </option>
                                                <option value='25' > 25 </option>
                                                <option value='26' > 26 </option>
                                                <option value='27' > 27 </option>
                                                <option value='28' > 28 </option>
                                                <option value='29' > 29 </option>
                                                <option value='30' > 30 </option>
                                                <option value='31' > 31 </option>
                                        </select>
                                    </div>
                                    <div>
                                        <select 
                                            name='Month' required
                                            value={monthBirth} 
                                            onChange={e => setMonthBirth(e.currentTarget.value)}
                                            >
                                                <option value='' disabled selected > Mes </option>
                                                <option value='1' > Enero </option>
                                                <option value='2' > Febrero </option>
                                                <option value='3' > Marzo </option>
                                                <option value='4' > Abril </option>
                                                <option value='5' > Mayo </option>
                                                <option value='6' > Junio </option>
                                                <option value='7' > Julio </option>
                                                <option value='8' > Agosto </option>
                                                <option value='9' > Septiembre </option>
                                                <option value='10' > Octubre </option>
                                                <option value='11' > Noviembre </option>
                                                <option value='12' > Diciembre </option>
                                        </select>
                                    </div>
                                    <div>
                                        <select 
                                            name='Year' required
                                            value={yearBirth} 
                                            onChange={e => setYearBirth(e.currentTarget.value)}
                                            >
                                                <option value='' disabled selected > Año </option>
                                                <option value='2002' > 2002 </option>
                                                <option value='2001' > 2001 </option>
                                                <option value='2000' > 2000 </option>
                                                <option value='1999' > 1999 </option>
                                                <option value='1998' > 1998 </option>
                                                <option value='1997' > 1997 </option>
                                                <option value='1996' > 1996 </option>
                                                <option value='1995' > 1995 </option>
                                                <option value='1994' > 1994 </option>
                                                <option value='1993' > 1993 </option>
                                                <option value='1992' > 1992 </option>
                                                <option value='1991' > 1991 </option>
                                                <option value='1990' > 1990 </option>
                                                <option value='1989' > 1989 </option>
                                                <option value='1988' > 1988 </option>
                                                <option value='1987' > 1987 </option>
                                                <option value='1986' > 1986 </option>
                                                <option value='1985' > 1985 </option>
                                                <option value='1984' > 1984 </option>
                                                <option value='1983' > 1983 </option>
                                                <option value='1982' > 1982 </option>
                                                <option value='1981' > 1981 </option>
                                                <option value='1980' > 1980 </option>
                                                <option value='1979' > 1979 </option>
                                                <option value='1978' > 1978 </option>
                                                <option value='1977' > 1977 </option>
                                                <option value='1976' > 1976 </option>
                                                <option value='1975' > 1975 </option>
                                                <option value='1974' > 1974 </option>
                                                <option value='1973' > 1973 </option>
                                                <option value='1972' > 1972 </option>
                                                <option value='1971' > 1971 </option>
                                                <option value='1970' > 1970 </option>
                                                <option value='1969' > 1969 </option>
                                                <option value='1968' > 1968 </option>
                                                <option value='1967' > 1967 </option>
                                                <option value='1966' > 1966 </option>
                                                <option value='1965' > 1965 </option>
                                                <option value='1964' > 1964 </option>
                                                <option value='1963' > 1963 </option>
                                                <option value='1962' > 1962 </option>
                                                <option value='1961' > 1961 </option>
                                                <option value='1960' > 1960 </option>
                                                <option value='1959' > 1959 </option>
                                                <option value='1958' > 1958 </option>
                                                <option value='1957' > 1957 </option>
                                                <option value='1956' > 1956 </option>
                                                <option value='1955' > 1955 </option>
                                                <option value='1954' > 1954 </option>
                                                <option value='1953' > 1953 </option>
                                                <option value='1952' > 1952 </option>
                                                <option value='1951' > 1951 </option>
                                                <option value='1950' > 1950 </option>
                                        </select>
                                    </div>
                                </div>   
                            </div>
                        </div> 
                        <div className='fila-3'> 
                            <div className='sexo-user' >
                                <select 
                                    name='Sex' required
                                    value={sexo} 
                                    onChange={e => setSexo(e.currentTarget.value)}
                                    >
                                        <option value='' disabled selected > Sexo </option>
                                        <option value='0' >Masculino </option>
                                        <option value='1' >Femenino </option>
                                </select>
                            </div>

                            <div className='genero-user' >
                                <select 
                                    name='Gender' required
                                    value={genero} 
                                    onChange={e => setGenero(e.currentTarget.value)}
                                    >
                                        <option value='' disabled selected > Género </option>
                                        <option>Hombre</option>
                                        <option>Mujer</option>
                                        <option>Homosexual</option>
                                        <option>Lesbiana</option>
                                </select>
                            </div>                    
                        </div>                   
                    
                        <div className='fila-4' >
                            <div className='email-user' >
                                <input 
                                    type='email' 
                                    placeholder='Email' 
                                    value={email} 
                                    onChange={e => setEmail(e.currentTarget.value)}
                                ></input>
                            </div>
                            <div>
                                <input 
                                    name= 'password'
                                    type='password' 
                                    placeholder='Contraseña'
                                    value={password} 
                                    onChange={e => setPassword(e.currentTarget.value)}                                     
                                    ></input>                                    
                            </div>
                            <div>
                                <input 
                                    name= 'confirm_password'
                                    type='password' 
                                    placeholder='Confirmar contraseña' 
                                    value={confirmPassword}
                                    ></input>
                                    
                            </div>
                        </div>

                        <div className='fila-5' >
                            <div className='btn-enviar'>
                                <button type="submit" form="form-datos-generales" value="Submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>                  

            </div>
        </div>
    )
                                                                      
}

export default SignInForm



