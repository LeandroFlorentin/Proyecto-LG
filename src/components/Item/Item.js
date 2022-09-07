import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({ img, nombre, codigo, especificaciones, precio, id }) => {
    return (
        < div className="contenedorLista" >
            <Link className='linkImg' to={`/item/${id}`}>
                <img className='imagenes social' src={require(`../../img/stock/${img.uno}`)} alt='Television' />
                <img className='imagenes social1' src={require(`../../img/stock/${img.dos}`)} alt='Television' />
            </Link>
            <div className='datos'>
                <div className='titulos'>
                    <h2 className='titulo1'>{nombre}</h2>
                    <h2 className='titulo2'>{codigo}</h2>
                </div>
                <ul>
                    <li className='espe'>{especificaciones.panel}</li>
                    <li className='espe'>{especificaciones.procesador}</li>
                    <li className='espe'>{especificaciones.sonido}</li>
                </ul>
                <h4 className='precio'>{`${precio}$`}</h4>
                <Link to={`/item/${id}`}><button className='boton'>Ver mas</button></Link>
            </div>
        </div >
    )
}

export default Item;
