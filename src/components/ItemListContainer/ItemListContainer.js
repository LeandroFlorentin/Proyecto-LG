import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import lupa from '../../img/cosito/lupa.png'
import Cargando from '../Cargando/Cargando.js'

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { getData } = useContext(CartContext)
    useEffect(() => {
        getData()
            .then(datos => {
                setItems(datos)
                setLoading(false)
            })
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