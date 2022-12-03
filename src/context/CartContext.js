import React, { useState } from 'react'
import db from '../utils/firebase.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Notiflix from 'notiflix';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const precioTotal = (productCartList) => productCartList.reduce((acc, next) => acc + (next.precio * next.cantidad), 0)

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
        setProductCartList(productCartList.filter(produc => produc.id !== id))
        Notiflix.Notify.success('Producto eliminado con exito.');
    }

    const clearCarrito = () => {
        setProductCartList([])
        Notiflix.Notify.success('Carrito vaciado con exito.');
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

    const getData = async (ele) => {
        if (ele) {
            const queryRef = query(collection(db, 'items'), where('modelo', '==', ele))
            const response = await getDocs(queryRef)
            const productos = response.docs.map(doc => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                }
                return newProduct
            });
            return productos
        }
        else {
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
    }

    return (
        <CartContext.Provider value={{
            productCartList,
            addItem,
            removeItem,
            clearCarrito,
            isInCart,
            updateItem,
            getData,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}