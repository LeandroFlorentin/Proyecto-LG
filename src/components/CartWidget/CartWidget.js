import './CartWidget.css'
import carrito from '../../img/carrito-de-compras.png';

const Carrito = ({ openModal, showModal, stopPropa, productCartList, removeItem, clearCarrito, precioTotal }) => {

    return (
        <div className='containerCarritoImg'>
            <div className='containerImgCant'>
                <p><strong>{productCartList.length}</strong></p>
                <img className='carrito' onClick={showModal} src={carrito} alt='carrito' />
            </div>
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
                                                <h4 className='nombreProdu'>{produc.nombre}</h4>
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
                            <div className='containerPrecioBoton'>
                                <h3 className='precioTotal'>Precio total: {precioTotal(productCartList)}</h3>
                                <button className='buttonClear' onClick={clearCarrito}>Vaciar carrito</button>
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