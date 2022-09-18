import './ItemDetail.css'
import { useContext } from 'react';
import Count from '../Count/Count.js';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const { addItem, restaNumero, sumaNumero, numero, isInCart, updateItem } = useContext(CartContext)
    const { img, id, nombre, codigo, especificaciones, precio } = item

    const agregado = (e) => {
        e.preventDefault()
        if (isInCart(item.id)) updateItem(item, numero)
        else addItem(item, numero)
    }

    return (
        <div className='containDetail' key={id}  >
            <div className="imgDetailContain">
                <img className='imgDetail' src={img ? require(`../../img/stock/${img?.uno}`) : ""} alt='Television' />
                <img className='imgDetail' src={img ? require(`../../img/stock/${img?.dos}`) : ""} alt='Television' />
            </div>
            <div className="imgBigDetailContain">
                <img className='imgBigDetail' src={img ? require(`../../img/stock/${img?.tres}`) : ""} alt='Television' />
            </div>
            <div className='containDetallesDetail'>
                <div className='nombreCodigoDetail'>
                    <h2 className='codigoDetail'>{codigo ? codigo : "..."}</h2>
                    <h2 className='nombreDetail'>{nombre ? nombre : "..."}</h2>
                </div>
                <ul className="ulDetail">
                    <li className='liDetail'>{especificaciones ? especificaciones?.panel : "..."}</li>
                    <li className='liDetail'>{especificaciones ? especificaciones?.procesador : "..."}</li>
                    <li className='liDetail'>{especificaciones ? especificaciones?.sonido : "..."}</li>
                </ul>
                <div className="precioContain">
                    <h4 className='precioDetail'>{precio ? `${precio}$` : "..."}</h4>
                </div>
                <div className="containerBotonDetail">
                    <div className="containerCountBtn">
                        <Count numero={numero} suma={sumaNumero} resta={restaNumero} />
                        <button className='botonDetail' onClick={(e) => agregado(e)} >Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemDetail;
