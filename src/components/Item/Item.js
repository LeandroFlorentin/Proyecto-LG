import './Item.css'

export const Item = ({ img, nombre, codigo, especificaciones, precio }) => {
    return (
        <div className="contenedorLista">
            <a className='icon'>
                <img className='imagenes social' src={require(`../../img/stock/${img.uno}`)} alt='Television' />
                <img className='imagenes social1' src={require(`../../img/stock/${img.dos}`)} alt='Television' />
            </a>
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
                <h4 className='precio'>Costo {precio}</h4>
                <button className='boton'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item;
