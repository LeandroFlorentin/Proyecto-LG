import logo from '../../img/logo/logo-b2c.jpg';
import logito from '../../img/cosito/lg-thinkq-logo.svg';
import logito2 from '../../img/cosito/usuario.png'
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import CarritoContainer from '../CarritoContainer/CarritoContainer.js'

const NavBar = () => {
    return (
        <div className='contenedor'>
            <Link className='img' to='/'><img src={logo} alt='logo' /></Link>
            <div className='divGlobal'>
                <div className='divSuperior'>
                    <img className='lg' src={logito} alt='LG' />
                </div>
                <nav className='nav'>
                    <div className='contenedorSpan'>
                        <NavLink className={(isActive) => isActive ? 'link' : 'linkoff'} exact to='/' ><span><strong>INICIO</strong></span></NavLink>
                        <NavLink className={(isActive) => isActive ? 'link' : 'linkoff'} to='/tienda' ><span><strong>TIENDA</strong></span></NavLink>
                        <NavLink className={(isActive) => isActive ? 'link' : 'linkoff'} to='/soporte' ><span><strong>SOPORTE</strong></span></NavLink >
                    </div >
                    <div className='divButton'>
                        <CarritoContainer />
                        <Link to='/iniciar'><img className='user' src={logito2} alt='USER' /></Link>
                    </div>
                </nav >
            </div >
        </div >
    )
}

export default NavBar;