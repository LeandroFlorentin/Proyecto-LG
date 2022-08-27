import carrito from '../img/carrito-de-compras.png';
import './cart.css'

const CartWidget = () => {
    return (
        <div className='containCarrito'>
            <img className='carrito' src={carrito} alt='carrito' />
        </div>
    )
}

export default CartWidget;