import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [item, setItems] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch('/archivo.json')
                .then(resp => resp.json())
                .then(datos => {
                    const producto = datos.find(item => item.id === parseInt(productId))
                    setItems(producto)
                    setLoading(false)
                })
        }, 500)
    }, [productId])

    return (
        <div className='capsulaItemsDetail'>
            <ItemDetail item={item} loading={loading} />
        </div>
    )
}

export default ItemDetailContainer;
