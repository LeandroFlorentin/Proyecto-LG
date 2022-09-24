import Item from '../Item/Item.js'
const ItemList = ({ items }) => {
    return (
        <>
            {items.map((producto) => {
                return (
                    <>
                        <Item nombre={producto.nombre}
                            uno={producto.uno}
                            dos={producto.dos}
                            tres={producto.tres}
                            id={producto.id}
                            codigo={producto.codigo}
                            panel={producto.panel}
                            procesador={producto.procesador}
                            sonido={producto.sonido}
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