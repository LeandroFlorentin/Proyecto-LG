import './count.css';
//EVENTOS.
const Count = ({ restaNumero, sumaNumero, numero }) => {

    //ELEMENTOS.
    return (
        <>
            <div className="containerGlobalCount">
                <div className="containerBtnNum">
                    <button className="botonRS" onClick={() => restaNumero()}>-</button>
                    <p className="numeroCount"><strong>{numero}</strong></p>
                    <button className="botonRS" onClick={() => sumaNumero()}>+</button>
                </div>
            </div>
        </>
    )
}

export default Count;