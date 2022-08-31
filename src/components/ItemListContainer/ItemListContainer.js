import data from './mock-data'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })
    useEffect(() => {
        getData.then((result) => {
            setItems(result);
            console.log(result);
        })
    }, [])
    return (
        <>
            <div className='capsulaGlobal'>
                <h1 className='saludo'>{greeting}</h1>
                <div className='capsulaItems'>
                    <ItemList itemsList={items} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;