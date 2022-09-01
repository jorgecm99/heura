import {React, useState} from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  './LandingTwo.css';
import image from '../../Assets/Images/image1.png';
import gafas from '../../Assets/Images/Imagen-gafas 1.png';
import icono from '../../Assets/Images/Vector.svg';
import google from '../../Assets/Images/google.png';
import lanzadera from '../../Assets/Images/lanzadera.png';
import Flickity from 'react-flickity-component';
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
        <h2 className='landing-two-h2-underline'>WHAT?</h2>
        <div className='landing-two-block'>
          <p className='landing-two-p'>We’re a Madrid-based mission-driven start-up developing and selling football experiences for 17 clubs and growing!. Bstadium provides fans the possibility of living exclusive physical and virtual experiences via the marketplace bstadium.es.</p>
          <img className='landing-two-img' src={gafas} alt=''></img>
        </div>
      </div>

     {/*  <div data-aos="fade-up" data-aos-duration="2000" className='landing-two-div-second'>
        <h2 className='landing-two-h2-underline'>¿porqué lo hacemos?</h2>
        <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false}>
          <img src={image} alt=''></img>
          <img src={image} alt=''></img>
          <img src={image} alt=''></img>
          <img src={image} alt=''></img>
        </Carousel>
      </div> */}

      {/* <div data-aos="fade-up" data-aos-duration="2000" className='landing-two-div-second-desktop'>
        <h2 className='landing-two-h2-underline'>¿porqué lo hacemos?</h2>
        <div className='landing-two-div-second-desktop-images'>
          <img src={image} alt='' className='image-carousel'></img>
          <img src={image} alt='' className='image-carousel'></img>
          <img src={image} alt='' className='image-carousel'></img>
          <img src={image} alt='' className='image-carousel'></img>
        </div>
      </div> */}


      {/*************************MOBILE******************** */}

      <div className='landing-two-div-three'>
        <h2 className='landing-two-h2-underline'>How?</h2>
        {/* <p><strong>Nuestra contribución a un mundo mejor:</strong></p> */}
        
        <Carousel showStatus={false} showThumbs={false} showIndicators={false} showArrows={false}>
          <div className='landing-two-div-three-container'>
            <img src={icono} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
            <div className='landing-two-div-three-group'>
              <h2 className='landing-two-div-three-title'>MIND BLOWING <br /> EXPERIENCES</h2>
              
            </div>
            <p className='landing-two-div-three-text'>Attractive experiences of all types (matches, tours, training, events…) using  tech (AR,/VR) and physical resources (stadium, players..)</p>            
          </div>

          <div className='landing-two-div-three-container'>
            <img src={icono} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
            <div className='landing-two-div-three-group'>
              <h2 className='landing-two-div-three-title'>EVERY DAY EXCLUSIVE <br />EXPERIENCES</h2>
              
            </div>
            <p className='landing-two-div-three-text'>Creating exclusive sales of our experience with partner clubs in match and non match days</p>
          </div>

          <div className='landing-two-div-three-container'>
            <img src={icono} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
            <div className='landing-two-div-three-group'>
              <h2 className='landing-two-div-three-title'>REACHING THE FOOTBALL<br />  COMMUNITY</h2>
              
            </div>
            <p className='landing-two-div-three-text'>Having direct too loyal fans who are willing to buy products with the support of clubs. <br />Internationalisation expansion. <br />Expanding our offering worldwide and adding new clubs to our marketplace</p>            
          </div>          
        </Carousel>
      </div>


      {/*************************DESKTOP******************** */}

      <div className='landing-two-div-three-desktop' >
          <h2 className='landing-two-h2-underline'>How?</h2>
      
        
        <Flickity>

        <div className='landing-two-div-three-slider' data-flickity='{ "freeScroll": true }'>
          <div className='landing-two-div-three-container-desktop'>
            <img src={icono} alt='' className='landing-two-div-three-image-desktop' style={{width:50, marginBottom:20}}></img>
            <div className='landing-two-div-three-group-desktop'>
              <h2 className='landing-two-div-three-title-desktop'>MIND BLOWING <br /> EXPERIENCES</h2>     
            </div>
            <p className='landing-two-div-three-text-desktop'>Attractive experiences of all types (matches, tours, training, events…) using  tech (AR,/VR) and physical resources (stadium, players..)</p>            
          </div>

          <div className='landing-two-div-three-container-desktop'>
            <img src={icono} alt='' className='landing-two-div-three-image-desktop' style={{width:50, marginBottom:20}}></img>
            <div className='landing-two-div-three-group-desktop'>
              <h2 className='landing-two-div-three-title-desktop'>EVERY DAY EXCLUSIVE <br />EXPERIENCES</h2>
              
            </div>
            <p className='landing-two-div-three-text-desktop'>Creating exclusive sales of our experience with partner clubs in match and non match days</p>
          </div>

          <div className='landing-two-div-three-container-desktop'>
            <img src={icono} alt='' className='landing-two-div-three-image-desktop' style={{width:50, marginBottom:20}}></img>
            <div className='landing-two-div-three-group-desktop'>
              <h2 className='landing-two-div-three-title-desktop'>REACHING THE FOOTBALL<br />  COMMUNITY</h2>
              
            </div>
            <p className='landing-two-div-three-text-desktop'>Having direct too loyal fans who are willing to buy products with the support of clubs. <br />Internationalisation expansion. <br />Expanding our offering worldwide and adding new clubs to our marketplace</p>            
          </div>
          </div>  
          </Flickity>  
          </div>  
        
      
    </div>



      <div className='landing-two-div-four-container'>
        <h2 className='landing-two-div-four-title landing-two-h2-new-underline'> <span className='four-span'>WINNERS!</span> </h2>
        <div className='landing-two-div-four-divs'>
          <div className='landing-two-div-four-divs-p'>            
            <p><b>First prize of competition 2021!</b> <br /> Thanks for the trust of our clients and club partners we showcase in this competition our new experiences and how fans are enjoying them!</p>
            <img src={google} alt='' className='landing-two-div-four-image'></img>
          </div>          
          {/* <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p><span className='last-span'>3,98M€</span> de 2778 Good Rebels</p>
          </div> */}
        </div>
        <div className='landing-two-div-four-divs'>
          <div className='landing-two-div-four-divs-p'>            
          <img src={lanzadera} alt='' className='landing-two-div-four-image'></img>
            <p>Bstadium has joined the growth accelerator program of Lanzadera, the biggest startups hub in Spain.</p>
            
          </div>          
          {/* <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p><span className='last-span'>3,98M€</span> de 2778 Good Rebels</p>
          </div> */}
        </div>  
      </div>
      
      
      
      

      <Flickity>  
        <div className='carousel' data-flickity='{"autoPlay":true}'>
          <div className='carousel-group'>
            <img src={image} alt='' className='carousel-img'></img>
            <p>"The Spanish company that brings sports closer to fans during the pandemic"</p>
          </div>
          <div className='carousel-group'>
            <img src={image} alt='' className='carousel-img'></img>
            <p>"To deseasonalize and democratize the consumption of sports through the experiences offered in its marketplace"</p>
          </div>
          <div className='carousel-group'>
            <img src={image} alt='' className='carousel-img'></img>
            <p>""Bstadium the innovative market place of sports leisure""</p>
          </div>
          <div className='carousel-group'>
            <img src={image} alt='' className='carousel-img'></img>
            <p>"La campaña de crowdfunding de Heura capta 4 millones de más de 3.000 inversores en un día."</p>
          </div>
        </div>
        </Flickity>
        
      
      

      

      
    </div>
  )
}

export default LandingTwo