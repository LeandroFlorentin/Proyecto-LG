import CartWidget from '../CartWidget/CartWidget.js';
import logo from '../../img/logo/logo-b2c.jpg';
import logito from '../../img/cosito/lg-thinkq-logo.svg';
import logito2 from '../../img/cosito/usuario.png'
import './NavBar.css';
import { Link } from 'react-router-dom';
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
                        <Link className='link' to='/' ><span><strong>INICIO</strong></span></Link>
                        <Link className='link' to='/tienda' ><span><strong>TIENDA</strong></span></Link>
                        <Link className='link' to='/soporte' ><span><strong>SOPORTE</strong></span></Link >
                    </div >
                    <div className='divButton'>
                        <CartWidget />
                        <Link to='/iniciar'><img className='user' src={logito2} alt='USER' /></Link>
                    </div>
                </nav >
            </div >
        </div >
    )
}

export default NavBar;