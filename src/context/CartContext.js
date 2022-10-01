import React, { useState } from 'react'
import db from '../utils/firebase.js'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const Swal = require('sweetalert2')

    const precioTotal = (productCartList) => {
        let precioTotally = 0;
        for (let i = 0; i < productCartList.length; i++) {
            console.log(typeof productCartList[i].cantidad)
            precioTotally += productCartList[i].precio * productCartList[i].cantidad;
        }
        return precioTotally;
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
        setProductCartList(productCartList.filter(produc => produc.id !== id))
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Producto eliminado correctamente'
        })
    }

    const clearCarrito = () => {
        setProductCartList([])
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Carrito vaciado con exito'
        })
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