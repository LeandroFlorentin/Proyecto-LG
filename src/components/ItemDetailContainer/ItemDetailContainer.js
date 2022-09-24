import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../../context/CartContext.js';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { getData } = useContext(CartContext)
    const { productId } = useParams();
    const [item, setItems] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData()
            .then(datos => {
                let producto = datos.find(dato => dato.id === productId)
                setItems(producto)
                setLoading(false)
            })
    }, [productId])

    return (
        <div className='capsulaItemsDetail'>
            <ItemDetail item={item} loading={loading} />
        </div>
    )
}

export default ItemDetailContainer;
