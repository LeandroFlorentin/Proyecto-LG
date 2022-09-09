import React from 'react'
import './IniciarSesion.css'
import { useState } from 'react'

const IniciarSesion = () => {

    const [input, setInput] = useState({
        email: '',
        contraseña: ''
    })
    const [errors, setErros] = useState({})

    const cambioDeTexto = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        /*         console.log(e.target.value)
                console.log(input.email) */
        //console.log(input.email.length + 1)
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (expReg.test(e.target.value)) setErros({ ...errors, error: false })
        else setErros({ ...errors, error: true })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(`se envio ${input}`)
    }

    return (
        <div className='containerIniciar'>
            <form className='formIniciar' onSubmit={(e) => submit(e)}>
                <div className='containerInput'>
                    <label><strong>Email</strong></label>
                    <input
                        type='text'
                        className='inputIniciar'
                        name='email'
                        placeholder='Ingrese su email'
                        onChange={(e) => cambioDeTexto(e)}
                        value={input.email}
                    />
                </div>
                <span hidden={!errors.error} className={errors.error ? 'errorEmail' : ''}>email invalido</span>
                <div className='containerInput'>
                    <label ><strong>Contraseña</strong></label>
                    <input
                        type='password'
                        className='inputIniciar'
                        name='contraseña'
                        placeholder='Ingrese su contraseña'
                        onChange={(e) => cambioDeTexto(e)}
                        value={input.contraseña}
                    />
                </div>
                <div className='containerRegis'>
                    <button className='botonIniciar'>Iniciar sesion</button>
                    <p className='pIniciar'><a href='https://www.facebook.com/'>Registrate</a></p>
                    <p className='pIniciar'><a href='https://www.facebook.com/'>Has olvidados tu contraseña?</a></p>
                </div>
            </form>
        </div>
    )
}

export default IniciarSesion;
