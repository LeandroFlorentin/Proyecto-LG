import './count.css';
//EVENTOS.
const Count = ({ numero, resta, suma }) => {

    //ELEMENTOS.
    return (
        <>
            <div className="containerGlobalCount">
                <div className="containerBtnNum">
                    <button className="botonRS" onClick={resta}>-</button>
                    <p className="numeroCount"><strong>{numero}</strong></p>
                    <button className="botonRS" onClick={suma}>+</button>
                </div>
            </div>
        </>
    )
}

export default Count;