import inicio from '../../img/stock/inicio.jpg';
import inicioMedium from '../../img/stock/inicio2.jpg';
import img1 from '../../img/stock/1-TAG-350.webp';
import img2 from '../../img/stock/350.webp';
import img3 from '../../img/stock/LGUDGHD.webp';
import img4 from '../../img/stock/Basic-351.webp'
import './Inicio.css'

const Inicio = () => {

    return (
        <div className='containerImgInicio'>
            <div className='imgInicioBig'>
                <img className='imgBig' src={inicio} alt='inicio' />
            </div>
            <div className='imgInicioMedium'>
                <img className='imgMedium' src={inicioMedium} alt='inicioMedium' />
            </div>
            <div className='containerImgSmallTitle'>
                <div className='titleSmall'>
                    <h2>Mira nuestro productos</h2>
                </div>
                <div className='imgSmallContainer'>
                    <div className='divSmall'>
                        <img className='imgSmall' src={img1} alt='img1' />
                        <h5 className='titleSmall'>LG OLED C1 Al ThinQ 4k 77''</h5>
                    </div>
                    <div className='divSmall'>
                        <img className='imgSmall' src={img2} alt='img2' />
                        <h5 className='titleSmall'>LG OLED C1 Al ThinQ 4k 77''</h5>
                    </div>
                    <div className='divSmall'>
                        <img className='imgSmall' src={img3} alt='img3' />
                        <h5 className='titleSmall'>Television LG UHD LED AI ThinQ 4K 65''</h5>
                    </div>
                    <div className='divSmall'>
                        <img className='imgSmall' src={img4} alt='img4' />
                        <h5 className='titleSmall'>LG UHD LED TV 60'' ThinQ™ AI</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;
