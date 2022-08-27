import CartWidget from './CartWidget';
import logo from '../logo.svg';
import './style.css';
const NavBar = ({ titulo, children }) => {
    console.log({ titulo, children })
    return (
        <div className='navbar-container'>
            <div>
                <img className='imagen' src={logo} alt='logo' />
            </div>
            <div className="lista">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <CartWidget />
            <div className='botonsi'>
                <button className="boton">Login</button>
            </div>
        </div>
    )
}

export default NavBar;