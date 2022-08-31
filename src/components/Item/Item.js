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
                <p className='espe'>{especificaciones.panel}</p>
                <p className='espe'>{especificaciones.procesador}</p>
                <p className='espe'>{especificaciones.sonido}</p>
                <button className='boton'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item;
