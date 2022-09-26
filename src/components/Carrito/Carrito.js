import './Carrito.css'
import carrito from '../../img/carrito-de-compras.png';
import db from '../../utils/firebase.js'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react';

const Carrito = ({ openModal, showModal, stopPropa, productCartList, removeItem, clearCarrito, precioTotal }) => {

    const [idOrder, setIdOrder] = useState('');

    const enviar = (e) => {
        e.preventDefault()

        const order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: productCartList,
            date: new Date(),
            total: precioTotal(productCartList)
        }
        const queryRef = collection(db, 'orders')
        addDoc(queryRef, order).then(response => {
            setIdOrder(response.id)
        })
    }

    return (
        <div>
            <img className='carrito' onClick={showModal} src={carrito} alt='carrito' />
            {
                openModal ?
                    <div className="backgroundModal" onClick={showModal}>
                        <div className="modal" onClick={stopPropa}>
                            <button className='botonCarrito' onClick={showModal}>X</button>
                            {
                                productCartList.length ?
                                    productCartList.map(produc => {
                                        return (
                                            <div className='containerProduCarrito'>
                                                <img className='imgCarrito' src={produc.uno} alt='imgCarrito' />
                                                <h4>{produc.nombre}</h4>
                                                <h4>Cantidad: {produc.cantidad}</h4>
                                                <h4>{produc.precio * produc.cantidad}$</h4>
                                                <button className='eliminarProdu' onClick={() => removeItem(produc.id)}>Eliminar</button>
                                            </div>
                                        )
                                    })
                                    :
                                    <div className='divNoProduc'>
                                        <h3>No agrego ningun producto al carrito.</h3>
                                    </div>
                            }
                            <div className='containerPyB'>
                                <h3 className='precioTotal'>Precio total: {precioTotal(productCartList)}</h3>
                                <button className='buttonClear' onClick={clearCarrito}>Vaciar carrito</button>
                                <div className='containerGlobalForm'>
                                    <form onSubmit={(e) => enviar(e)} className='containerForm'>
                                        <div className='containerLabInp'>
                                            <label>Nombre</label>
                                            <input
                                                type='text'
                                                placeholder='Nombre'
                                                name='name'
                                            />
                                        </div>
                                        <div className='containerLabInp'>
                                            <label>Email</label>
                                            <input
                                                type='text'
                                                placeholder='Email'
                                                name='email'
                                            />
                                        </div>
                                        <div className='containerLabInp'>
                                            <label>Telefono</label>
                                            <input
                                                type='text'
                                                name='phone'
                                                placeholder='Telefono'
                                            />
                                        </div>
                                        <button className='btnCarrito' type='submit'>Hacer compra</button>
                                    </form>
                                </div>
                                {idOrder ?
                                    <>
                                        <p className='pOrder'><strong>{`Su orden fue creada con exito. ID : ${idOrder}`}</strong></p>
                                    </>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Carrito;
