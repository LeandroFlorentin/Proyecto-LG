import Item from '../Item/Item.js'
const ItemList = ({ items }) => {
    return (
        <>
            {items.map((producto) => {
                return (
                    <>
                        <Item nombre={producto.nombre}
                            img={producto.img}
                            id={producto.id}
                            codigo={producto.codigo}
                            especificaciones={producto.especificaciones}
                            key={producto.id}
                            precio={producto.precio}
                        />
                    </>
                )
            })}
        </>
    );
}

export default ItemList;