import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import lupa from '../../img/cosito/lupa.png'
import Cargando from '../Cargando/Cargando.js'

const ItemListContainer = () => {
    const { tienda } = useParams
    console.log(tienda)
    const [filtro, setFiltro] = useState('')
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { getData } = useContext(CartContext)
    useEffect(() => {
        getData(filtro)
            .then(datos => {
                setItems(datos)
                setLoading(false)
            })
    }, [filtro])

    console.log(filtro)

    const cambiar = (descrip) => {
        setFiltro(descrip)
    }



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
                        <div className='containerItemEspe'>
                            <div className='containerEspe'>
                                <h3>Modelos TV</h3>
                                <p onClick={() => cambiar('oled')}>OLED TV</p>
                                <p onClick={() => cambiar('uhd')}>UHD TV 4K</p>
                                <p onClick={() => cambiar('smart')}>Smart TV</p>
                                <button onClick={() => cambiar()}>Sacar filtros</button>
                            </div>
                            <div className='capsulaItems'>
                                <ItemList items={items} loading={loading} />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemListContainer;