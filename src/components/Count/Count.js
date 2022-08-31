import { useState } from "react";
import styled from 'styled-components'
//EVENTOS.
const Count = () => {
    const [numero, setNumero] = useState(0);
    const sumaNumero = () => {
        setNumero((numero) => numero + 1)
    }
    const restaNumero = () => {
        if (numero === 0) return numero;
        setNumero((numero) => numero - 1)
    }

    //ELEMENTOS.
    const Contenedor = styled.div`
        display: flex;
        justify-content: center;
    `

    const ContenedorSub = styled.div`
        display: inline-block;
        background-color: #eee;
        box-shadow: 5px 5px #222;
        border-radius: 10px;
    `

    const ContenedorCont = styled.div`
    `

    const Resta = styled.button`
        height: 25px;
        width: 25px;
        margin-right: 20px;
    `

    const Suma = styled.button`
        height: 25px;
        width: 25px;
        margin-left: 20px;
    `

    const Numero = styled.h1`
        display: inline-block;
        color: black;
    `

    const Boton = styled.button`
        display: inline-block;
        height: 25px;
        width: 150px;
    `
    return (
        <>
            <Contenedor>
                <ContenedorSub>
                    <ContenedorCont>
                        <Resta onClick={restaNumero}>-</Resta>
                        <Numero>{numero}</Numero>
                        <Suma onClick={sumaNumero}>+</Suma>
                    </ContenedorCont>
                    <Boton>Agregar al carrito.</Boton>
                </ContenedorSub>
            </Contenedor>
        </>
    )
}

export default Count;