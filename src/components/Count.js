import { useState } from "react";
import './cortadorStyle.css'

export const Count = () => {
    const [numero, setNumero] = useState(0);
    const sumaNumero = () => {
        setNumero(numero + 1)
    }
    const restaNumero = () => {
        if (numero === 0) return numero;
        setNumero(numero - 1)
    }
    return (
        <>
            <div className="contenedor">
                <div className="contenedorSub">
                    <div class className='contenedorCont'>
                        <button className='resta' onClick={restaNumero}>-</button>
                        <h1 className="numero">{numero}</h1>
                        <button className='suma' onClick={sumaNumero}>+</button>
                    </div>
                    <button className='botonCarro'>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default Count;