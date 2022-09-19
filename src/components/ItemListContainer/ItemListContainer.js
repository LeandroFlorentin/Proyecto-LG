import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import lupa from '../../img/cosito/lupa.png'
import Cargando from '../Cargando/Cargando.js'

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('archivo.json')
                .then(response => response.json())
                .then(datos => {
                    setItems(datos)
                    setLoading(false)
                })
        }, 500)
    }, [])


    return (
        <>
            {
                loading ?
                    <Cargando />
                    :
                    <div className='capsulaGlobal'>
                        <div className='containerBuscador'>
                            <img src={lupa} className='lupa' alt='lupa' />
                            <input className='buscador' name='busqueda' type='search' placeholder='Buscar' />
                        </div>
                        <div className='capsulaItems'>
                            <ItemList items={items} loading={loading} />
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemListContainer;