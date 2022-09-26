import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import inicio from '../../img/stock/inicio.jpg';
import inicio3 from '../../img/stock/inicio3.jpg';
import inicio4 from '../../img/stock/inicio4.jpg';
import inicioMedium from '../../img/stock/inicio2.jpg';
import './Inicio.css'

const Inicio = () => {
    const { getData } = useContext(CartContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        getData()
            .then(datos => {
                setItems(datos)
            })
    }, [])
    const arrayCuatro = items.slice(0, 4);
    return (
        <div className='containerImgInicio'>
            <div id="carrusel-contenido">
                <div id="carrusel-caja">
                    <div class="carrusel-elemento">
                        <img class="imagenes" src={inicio} alt='img' />
                    </div>
                    <div class="carrusel-elemento">
                        <img class="imagenes" src={inicio3} alt='img' />
                    </div>
                    <div class="carrusel-elemento">
                        <img class="imagenes" src={inicio4} alt='img' />
                    </div>
                </div>
                <div className='imgInicioMedium'>
                    <img className='imgMedium' src={inicioMedium} alt='inicioMedium' />
                </div>
                <div className='containerImgSmallTitle'>
                    <div className='titleSmall'>
                        <h2>Mira nuestro productos</h2>
                    </div>
                    <div className='imgSmallContainer'>
                        {
                            arrayCuatro.map(produc => {
                                return (
                                    <Link to={`/item/${produc.id}`} className='linkSmall'>
                                        <div key={produc.id} className='divSmall'>
                                            <img className='imgSmall' src={produc.uno} alt='img' />
                                            <h5 className='titleSmall'>{produc.nombre}</h5>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;
