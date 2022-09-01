import './Item.css'

export const Item = ({ img, nombre, codigo, especificaciones }) => {
    console.log(img)
    return (
        <div className="contenedorLista">
            <img className='imagenes' src={require(`../../img/stock/${img}`)} alt='Television' />
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
                <button className='boton'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item;
