import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ nombre, codigo, precio, id, uno, dos, panel, sonido, procesador }) => {
    return (
        <>
            {
                < div className="contenedorLista" key={id} >
                    <Link className='linkImg' to={`/item/${id}`}>
                        <img className='imagenes social' src={uno} alt='Television' />
                        <img className='imagenes social1' src={dos} alt='Television' />
                    </Link>
                    <div className='datos'>
                        <div className='titulos'>
                            <h2 className='titulo1'>{nombre}</h2>
                            <h2 className='titulo2'>{codigo}</h2>
                        </div>
                        <ul>
                            <li className='espe'>{panel}</li>
                            <li className='espe'>{procesador}</li>
                            <li className='espe'>{sonido}</li>
                        </ul>
                        <h4 className='precio'>{`${precio}$`}</h4>
                        <Link to={`/item/${id}`}><button className='boton'>Ver mas</button></Link>
                    </div>
                </div >
            }
        </>
    )
}

export default Item;
