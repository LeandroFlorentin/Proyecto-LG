import './footer.css';
import chat from '../../img/pie/home.webp';
import mail from '../../img/pie/mail.webp';
import tele from '../../img/pie/telefono.png';
import wpp from '../../img/pie/wpp.png'
import img_lg from '../../img/pie/img_lg.png'

const Footer = () => {
    return (
        <footer>
            <div className='tituloFooter'>
                <h1>Service y Soporte de LG</h1>
                <p>Consúltenos sobre configuración de productos, usabilidad y mantenimiento</p>
            </div>
            <div class='containerImg'>
                <div className='miniContainer'>
                    <img src={chat} className='img' />
                    <h3>POR CHAT ON LINE</h3>
                    <p>De lunes a viernes de 09 a 18hs contacte online a un representante.</p>
                </div>
                <div className='miniContainer'>
                    <img src={mail} className='img' />
                    <h3>POR E-MAIL</h3>
                    <p>Envíe un mensaje a Atención al cliente LG y Soporte Técnico.</p>
                </div>
                <div className='miniContainer'>
                    <img src={tele} className='img' />
                    <h3>POR TELEFONO</h3>
                    <p>Llame a un Representante de LG Soporte Técnico al 0800-888-5454
                        Lunes a Viernes de 8hs a 20hs</p>
                    <p>
                        Clientes Corporativos
                        (Cartelería Digital y Aires Comerciales) al 0800-345-5422
                        Lunes a Viernes de 8hs a 20hs
                    </p>
                </div>
                <div className='miniContainer'>
                    <img src={wpp} className='img' />
                    <h3>POR WHATSAPP</h3>
                    <p>¡Comunicate fácilmente con nosotros!
                        * Agregá 11 5524 2090 a tus contactos y estarás conectado con el Servicio al Cliente de LG.</p>
                    <p>
                        Lunes a Viernes de 8hs a 20hs
                    </p>
                </div>
            </div>
            <div className='finalPie'>
                <div className='containTexto'>
                    <div className='containSpan'>
                        <span>Mapa del Sitio</span>
                        <span>Legales</span>
                        <span>Términos de uso LGE Service</span>
                        <span>Política de privacidad</span>
                        <span>Política de cookies</span>
                    </div>
                    <p>Copyright © 2009-2022 LG Electronics. Todos los derechos reservados</p>
                    <p>Esta es la página oficial de LG Electronics. Si desea conectarse a LG Corp. u otras filiales de LG, haga clic</p>
                </div>
                <div>
                    <img src={img_lg} className='lgImg' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;