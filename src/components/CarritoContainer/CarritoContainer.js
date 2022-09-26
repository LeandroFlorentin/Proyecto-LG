import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import Carrito from "../Carrito/Carrito.js";

const CarritoContainer = () => {
    const { productCartList, removeItem, clearCarrito, precioTotal } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const showModal = () => {
        setOpenModal(!openModal)
    }

    const stopPropa = (e) => {
        e.stopPropagation()
    }
    return (
        <Carrito
            showModal={showModal}
            stopPropa={stopPropa}
            openModal={openModal}
            productCartList={productCartList}
            removeItem={removeItem}
            clearCarrito={clearCarrito}
            precioTotal={precioTotal}
        />
    )
}

export default CarritoContainer;