import React from 'react'
import './soporte.css'
import { useState } from 'react'

const Soporte = () => {
    const [input, setInput] = useState({
        nombreCompleto: '',
        email: '',
        problema: ''
    })

    const [error, setError] = useState({})

    const cambioValue = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const seEnvio = (e) => {
        e.preventDefault()
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (expReg.test(input.email)) {
            setError({ ...error, name: false })
        } else setError({ ...error, name: true })
        console.log(`Se envio: ${input.nombreCompleto} ${input.email} ${input.problema}`)
    }

    return (
        <div className='containerForm'>
            <form className='formSoporte' onSubmit={(e) => seEnvio(e)}>
                <div className='divInput'>
                    <label>Nombre completo</label>
                    <input
                        className='input'
                        type='text'
                        name='nombreCompleto'
                        onChange={(e) => cambioValue(e)} />
                </div>
                <div className='divInput'>
                    <label>Email</label>
                    <input
                        className='input'
                        type='text'
                        name='email'
                        onChange={(e) => cambioValue(e)} />
                </div>
                <span hidden={!error.name}>El mail no es valido</span>
                <div className='divInput'>
                    <label>Problema</label>
                    <textarea
                        className='textAreaSoporte'
                        type='text'
                        name='problema'
                        onChange={(e) => cambioValue(e)} />
                </div>
                <input type='submit' className='inputSubmit' />
            </form>
        </div>
    )
}

export default Soporte;
