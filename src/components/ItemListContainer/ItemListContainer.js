import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import lupa from '../../img/cosito/lupa.png'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('archivo.json')
            .then(response => response.json())
            .then(datos => setItems(datos))
        }, 2000)

    }, [])

    return (
        <>
            <div className='capsulaGlobal'>
                <div className='containerBuscador'>
                    <img src={lupa} className='lupa' alt='lupa' />
                    <input className='buscador' name='busqueda' type='search' placeholder='Buscar' />
                </div>
                <div className='capsulaItems'>
                    <ItemList itemsList={items} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;