import React, { useState } from 'react'
import db from '../utils/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

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
            cantidad: cantidad
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
    }

    const getData = async () => {
        const query = collection(db, "items")
        const response = await getDocs(query)
        const array = response.docs.map(doc => {
            const newProduct = {
                ...doc.data(),
                id: doc.id
            }
            return newProduct
        });
        return array
    }

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
            updateItem,
            getData
        }}>
            {children}
        </CartContext.Provider>
    )
}