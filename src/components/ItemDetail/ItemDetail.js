import './ItemDetail.css'
import { useContext } from 'react';
import Count from '../Count/Count.js';
import { CartContext } from '../../context/CartContext';
import Cargando from '../Cargando/Cargando.js'

const ItemDetail = ({ item, loading }) => {
    console.log(item)
    const { addItem, restaNumero, sumaNumero, numero, isInCart, updateItem } = useContext(CartContext)
    const { nombre, codigo, precio, id, uno, dos, panel, sonido, procesador, tres } = item

    const agregado = (e) => {
        e.preventDefault()
        if (numero < 1) console.log("la cantidad debe ser mayor a 0")
        else if (isInCart(item.id)) updateItem(item, numero)
        else addItem(item, numero)
    }

    return (
        <>
            {
                loading ?
                    <>
                        <Cargando />
                    </>
                    :
                    <div className='containDetail' key={id}>
                        < div className="imgDetailContain" >
                            <img className='imgDetail' src={uno} alt='Television' />
                            <img className='imgDetail' src={dos} alt='Television' />
                        </div >
                        <div className="imgBigDetailContain">
                            <img className='imgBigDetail' src={tres} alt='Television' />
                        </div>
                        <div className='containDetallesDetail'>
                            <div className='nombreCodigoDetail'>
                                <h2 className='codigoDetail'>{codigo}</h2>
                                <h2 className='nombreDetail'>{nombre}</h2>
                            </div>
                            <ul className="ulDetail">
                                <li className='liDetail'>{panel}</li>
                                <li className='liDetail'>{procesador}</li>
                                <li className='liDetail'>{sonido}</li>
                            </ul>
                            <div className="precioContain">
                                <h4 className='precioDetail'>{precio}</h4>
                            </div>
                            <div className="containerBotonDetail">
                                <div className="containerCountBtn">
                                    <Count numero={numero} suma={sumaNumero} resta={restaNumero} />
                                    <button className='botonDetail' onClick={(e) => agregado(e)} >Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div >
            }
        </>
    )
}

export default ItemDetail;
