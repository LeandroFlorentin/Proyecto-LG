import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [numero, setNumero] = useState(0);

    const sumaNumero = () => {
        setNumero((numero) => numero + 1)
    }

    const restaNumero = () => {
        if (numero === 0) return numero;
        setNumero((numero) => numero - 1)
    }

    const [productCartList, setProductCartList] = useState([])

    const addItem = (item, cantidad) => {
        if (cantidad < 1) return { ...item }
        const newProduct = {
            ...item,
            cantidad
        }
        const newArray = [...productCartList];
        newArray.push(newProduct);
        setProductCartList(newArray);
    }

    const removeItem = (id) => {
        setProductCartList(
            productCartList.filter(produc => produc.id !== id)
        )
    }

    const clearCarrito = () => {
        setProductCartList(
            []
        )
    }

    const isInCart = (id) => {
        let producto = productCartList.filter(produc => produc.id === id)
        if (producto) return true
        else return false
    }

    const updateItem = (item, cantidad) => {
        let newProductCartList = productCartList.filter((product) => product.id !== item.id);
        const newProduct = {
            ...item,
            cantidad,
        };
        newProductCartList.push(newProduct);
        setProductCartList(newProductCartList);
    };

    return (
        <CartContext.Provider value={{
            productCartList,
            addItem,
            sumaNumero,
            restaNumero,
            numero,
            removeItem,
            clearCarrito,
            isInCart,
            updateItem
        }}>
            {children}
        </CartContext.Provider>
    )
}