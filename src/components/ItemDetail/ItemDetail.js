import { useEffect, useState } from "react";
import '../Item/Item.css'

const ItemDetail = () => {
    const [item, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch('archivo.json')
                .then(resp => resp.json())
                .then(datos => setItems(datos))
        }, 2000)
    }, [])

    return (
        item.map(element => {
            return (
                <div className='contenedorLista'>
                    <a className='icon'>
                        <img className='imagenes social' src={require(`../../img/stock/${element.img.uno}`)} alt='Television' />
                        <img className='imagenes social1' src={require(`../../img/stock/${element.img.dos}`)} alt='Television' />
                    </a>
                    <div className='datos'>
                        <div className='titulos'>
                            <h2 className='titulo1'>{element.nombre}</h2>
                            <h2 className='titulo2'>{element.codigo}</h2>
                        </div>
                        <ul>
                            <li className='espe'>{element.especificaciones.panel}</li>
                            <li className='espe'>{element.especificaciones.procesador}</li>
                            <li className='espe'>{element.especificaciones.sonido}</li>
                        </ul>
                        <h4 className='precio'>Costo {element.precio}</h4>
                        <button className='boton'>Agregar al carrito</button>
                    </div>
                </div>
            )
        })
    )
}

export default ItemDetail;
