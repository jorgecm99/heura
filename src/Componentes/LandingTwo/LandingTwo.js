import {React, useState} from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  './LandingTwo.css';
import image from '../../Assets/Images/image1.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); 



const LandingTwo = () => {
  //change background color
  const [color, setColor] = useState(false);
  //const [colorNuevo, setColorNuevo] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1000){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  /*const changeColorNuevo = () => {
    if (window.scrollY >= 1000){
      setColorNuevo(true)
    } else {
      setColorNuevo(false)
    }
  }*/

  window.addEventListener('scroll', changeColor)


  return (
    <div className='landing-two'>
      <div className={ color ? 'landing-two-mainbg' : 'landing-two-seconbg'}>
      <div className='landing-two-div-one'>
        <h2 className='landing-two-h2-underline'>¿quienes somos?</h2>
        <p className='landing-two-p'>Somos una startup de Barcelona con una misión. Nos dedicamos a desarrollar sucesores de la carne 
          de origen vegetal y a construir una comunidad global de personas revolucionarias dispuestas a 
          sensibilizar al resto del mundo.</p>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className='landing-two-div-second'>
        <h2 className='landing-two-h2-underline'>¿porqué lo hacemos?</h2>
        <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false}>
          <img src={image} alt=''></img>
          <img src={image} alt=''></img>
          <img src={image} alt=''></img>
          <img src={image} alt=''></img>
        </Carousel>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className='landing-two-div-second-desktop'>
        <h2 className='landing-two-h2-underline'>¿porqué lo hacemos?</h2>
        <div className='landing-two-div-second-desktop-images'>
          <img src={image} alt='' className='image-carousel'></img>
          <img src={image} alt='' className='image-carousel'></img>
          <img src={image} alt='' className='image-carousel'></img>
          <img src={image} alt='' className='image-carousel'></img>
        </div>
      </div>

      <div className='landing-two-div-three'>
        <h2 className='landing-two-h2-underline'>¿como lo hacemos?</h2>
        <p><strong>Nuestra contribución a un mundo mejor:</strong></p>
        <Carousel showStatus={false} showThumbs={false} showIndicators={false} showArrows={false}>

          <div className='landing-two-div-three-container'>
            <div className='landing-two-div-three-group'>
              <h2 className='landing-two-div-three-title'>tecnología mediterránea</h2>
              <h2 className='landing-two-div-three-title'>de primer nivel</h2>
            </div>
            <p className='landing-two-div-three-text'>Aprovechamos nuestra herencia mediterránea para desarrollar productos vegetales saludables y
               deliciosos: todos los productos cárnicos que nos encantan, pero con efectos beneficiosos para
                el planeta, los animales y nuestra salud.
            </p>
            <img src={image} alt='' className='landing-two-div-three-image'></img>
          </div>

          <div className='landing-two-div-three-container'>
            <div className='landing-two-div-three-group'>
              <h2 className='landing-two-div-three-title'>una comunidad de good</h2>
              <h2 className='landing-two-div-three-title'>rebels</h2>
            </div>
            <p className='landing-two-div-three-text'>Nuestra comunidad sigue creciendo para convertirse en un movimiento global y transformador de 
              Good Rebels desde el empoderamiento y la información.</p>
            <img src={image} alt='' className='landing-two-div-three-image'></img>
          </div>  

          <div className='landing-two-div-three-container'>
            <div className='landing-two-div-three-group'>
              <h2 className='landing-two-div-three-title'>expansión internacional</h2>
              <h2 className='landing-two-div-three-title'>y democratización de</h2>
              <h2 className='landing-two-div-three-title'>productos</h2>
            </div>
            <p className='landing-two-div-three-text'>Queremos que Heura® llegue cada vez a más mercados. Porque donde no hay opciones, no hay libertad.</p>
            <img src={image} alt='' className='landing-two-div-three-image'></img>
          </div>      
        </Carousel>
      </div>
      </div>

      <div className='landing-two-div-four-container'>
        <h2 className='landing-two-div-four-title'>¡el primer crowd equity demostró que si nos juntamos somos capaces <span className='four-span'>de todo!</span></h2>
        <div className='landing-two-div-four-divs'>
          <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p>Terminamos la 1ª ronda en <span className='last-span'>16 horas</span></p>
          </div>
          <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p><span className='last-span'>2778 personas,</span> 41% mujeres, 50% de 18 a 30 años</p>
          </div>
          <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p><span className='last-span'>3,98M€</span> de 2778 Good Rebels</p>
          </div>
        </div>  
      </div>
      
      
      
      
      <div className='landing-two-div-last'>
      <Carousel showStatus={false} showThumbs={false} showIndicators={false} showArrows={false} autoPlay interval="3000" infiniteLoop transitionTime="3000" >
        <div className='landing-two-div-last-group'>
          <img src={image} alt='' className='landing-two-div-last-img'></img>
          <p>"Heura: El exitoso negocio que une a varios futbolistas españoles."</p>
        </div>
        <div className='landing-two-div-last-group'>
          <img src={image} alt='' className='landing-two-div-last-img'></img>
          <p>"El ex futbolista del Manchester United Chris Smalling invierte en la empresa de carne de origen 
            vegetal Heura"</p>
        </div>
        <div className='landing-two-div-last-group'>
          <img src={image} alt='' className='landing-two-div-last-img'></img>
          <p>"Los futbolistas Cesc Fábregas, Saúl Ñíguez, Borja Iglesias y Sergi Roberto entran como inversores en Heura"</p>
        </div>
        <div className='landing-two-div-last-group'>
          <img src={image} alt='' className='landing-two-div-last-img'></img>
          <p>"La campaña de crowdfunding de Heura capta 4 millones de más de 3.000 inversores en un día."</p>
        </div>
        </Carousel>
        </div>
        
      
      

      

      
    </div>
  )
}

export default LandingTwo