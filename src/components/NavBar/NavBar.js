import CartWidget from '../CartWidget/CartWidget.js';
import logo from '../../img/logo/logo-b2c.jpg';
import logito from '../../img/cosito/lg-thinkq-logo.svg';
import logito2 from '../../img/cosito/usuario.png'
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='contenedor'>
            <img className='img' src={logo} alt='logo' />
            <div className='divGlobal'>
                <div className='divSuperior'>
                    <img className='lg' src={logito} alt='LG' />
                </div>
                <nav className='nav'>
                    <div className='contenedorSpan'>
                        <span><a href='#'>TV/AUDIO</a></span>
                        <span><a href='#'>ELECTRODOMESTICOS</a></span>
                        <span><a href='#'>INFORMATICA</a></span>
                        <span><a href='#'>TIENDA</a></span>
                        <span><a href='#'>SOPORTE</a></span>
                    </div>
                    <div className='divButton'>
                        <CartWidget />
                        <img className='user' src={logito2} alt='USER' />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;