import db from '../../utils/firebase.js'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react';
import './FormBuy.css'
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';

const FormBuy = (props) => {
    const { productCartList, precioTotal } = useContext(CartContext)
    const [idOrder, setIdOrder] = useState('');
    const [errors, setErrors] = useState({})
    const [order, setOrder] = useState()
    const enviar = (e) => {
        e.preventDefault()
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (!expReg.test(e.target[1].value) || !productCartList.length) {
            if (!expReg.test(e.target[1].value)) setErrors({ ...errors, error: false })
            else setErrors({ ...errors, error: true })
            if (!productCartList.length) console.log('meta productos para hacer una orden')
        } else {
            const order = {
                buyer: {
                    name: e.target[0].value,
                    phone: e.target[2].value,
                    email: e.target[1].value
                },
                items: productCartList,
                date: new Date(),
                total: precioTotal(productCartList)
            }
            setOrder(order)
            const queryRef = collection(db, 'orders')
            addDoc(queryRef, order).then(response => {
                setIdOrder(response.id)
            })
        }
    }
    return (
        <div className='containerPyB'>
            <div className='containerGlobalForm'>
                <form onSubmit={(e) => enviar(e)} className='containerForm'>
                    <div className='containerLabInp'>
                        <label>Nombre</label>
                        <input
                            type='text'
                            placeholder='Nombre'
                            name='name'
                            required
                        />
                    </div>
                    <div className='containerLabInp'>
                        <label>Email</label>
                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            required
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
            <div className='containerOrder'>
                {idOrder ?
                    <div className='containerTextOrder'>
                        <h3 className='pOrder'><strong>{order.buyer.name}</strong></h3>
                        <h3 className='pOrder'><strong>Su orden fue creada con exito</strong></h3>
                        <h4 className='pOrder'>Precio total de su compra: {order.total}$</h4>
                        <h4 className='pOrder'>En el dia: {new Date().toLocaleString()}</h4>
                        <h4 className='pOrder'>id: {`${idOrder}`}</h4>
                    </div>
                    :
                    <div className='containerP'><p className='textoOrder'>No realizo ninguna order</p></div>
                }
            </div>
        </div>
    )
}

export default FormBuy;