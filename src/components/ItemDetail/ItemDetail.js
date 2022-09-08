import { useEffect, useState } from "react";
import './ItemDetail.css'
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const { productId } = useParams();
    const [item, setItems] = useState({})

    useEffect(() => {
        setTimeout(() => {
            fetch('/archivo.json')
                .then(resp => resp.json())
                .then(datos => {
                    const producto = datos.find(item => item.id === parseInt(productId))
                    setItems(producto)
                })
        }, 500)
    }, [productId])

    const { id, img, nombre, codigo, especificaciones, precio } = item;

    return (
        <div className='containDetail' key={id} >
            <div className="imgDetailContain">
                <img className='imgDetail' src={img ? require(`../../img/stock/${img?.uno}`) : ""} alt='Television' />
                <img className='imgDetail' src={img ? require(`../../img/stock/${img?.dos}`) : ""} alt='Television' />
            </div>
            <div className="imgBigDetailContain">
                <img className='imgBigDetail' src={img ? require(`../../img/stock/${img?.tres}`) : ""} alt='Television' />
            </div>
            <div className='containDetallesDetail'>
                <div className='nombreCodigoDetail'>
                    <h2 className='codigoDetail'>{codigo ? codigo : "..."}</h2>
                    <h2 className='nombreDetail'>{nombre ? nombre : "..."}</h2>
                </div>
                <ul className="ulDetail">
                    <li className='liDetail'>{especificaciones ? especificaciones?.panel : "..."}</li>
                    <li className='liDetail'>{especificaciones ? especificaciones?.procesador : "..."}</li>
                    <li className='liDetail'>{especificaciones ? especificaciones?.sonido : "..."}</li>
                </ul>
                <div className="precioContain">
                    <h4 className='precioDetail'>{precio ? `${precio}$` : "..."}</h4>
                </div>
                <div className="containerBotonDetail">
                    <button className='botonDetail'>Agregar al carrito</button>
                </div>
            </div>
        </div >
    )
}

export default ItemDetail;
