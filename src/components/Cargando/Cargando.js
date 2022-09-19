import cargando from '../../img/cargando/cargando.gif'
import './Cargando.css'

const Cargando = () => {
    return (
        <div className='containerCargando'>
            <h3 className='tituloCargando'>Cargando</h3>
            <img className='cargando' src={cargando} alt='cargando' />
        </div>
    )
}

export default Cargando;