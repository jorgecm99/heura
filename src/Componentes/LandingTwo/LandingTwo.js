import {React, useState} from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
/* import { Carousel } from 'react-responsive-carousel'; */
import  './LandingTwo.css';
/* import image from '../../Assets/Images/image1.png'; */
import gafas from '../../Assets/Images/Image-gafas-1.png';
import player from '../../Assets/Images/Picture1.jpg'
/* import player1 from '../../Assets/Images/Picture2.jpg'; */
import icono1 from '../../Assets/Images/icono1.svg';
import icono2 from '../../Assets/Images/icono2.svg';
import icono3 from '../../Assets/Images/icono3.svg';
import elpais from '../../Assets/Images/el-pais.svg';
import bus from '../../Assets/Images/bus.jpg';
import busmv from '../../Assets/Images/fotobusmv.png';
import emprendedores from '../../Assets/Images/emprendedores-logo.png';
import bilbao from '../../Assets/Images/logobilbao.svg';
import madrid from '../../Assets/Images/real-madrid-logo-escudo-1.svg';
import sevilla from '../../Assets/Images/sevilla-logo-escudo.svg';
import valladolid from '../../Assets/Images/EscudoRealValladolid.svg';
import betis from '../../Assets/Images/escudobetis.svg';
import real from '../../Assets/Images/EscudoRealSociedad.svg';
import atletico from '../../Assets/Images/EscudoAtleticoMadrid.svg';
import bacerlona from '../../Assets/Images/Barcelona-logo-escudo.svg';
import economiesta from '../../Assets/Images/economiesta.svg';
import marca from '../../Assets/Images/marcalogo.png';
import expansion from '../../Assets/Images/expansion-new.svg';
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
        <div className='landing-two-div-one' data-aos="fade-up" data-aos-duration="2000">
          <h2 className='landing-two-h2-underline'>WHAT?</h2>
          <div className='landing-two-block' data-aos="fade-up" data-aos-duration="2000">
            <p className='landing-two-p'>We’re a Madrid-based mission-driven start-up developing and selling football experiences for 17 clubs and growing!. Bstadium provides fans the possibility of living exclusive physical and virtual experiences via the marketplace bstadium.es.</p>
            <img className='landing-two-img' src={gafas} alt=''></img>
            <img className='landing-two-img' src={player} alt=''></img>
            
          </div>
        </div>

        <div className='landing-two-div-one' data-aos="fade-up" data-aos-duration="2000">
          <h2 className='landing-two-h2-underline'>OFFICIAL PARTNERS OF:</h2>
          <Flickity>  
          <div className='carousel' data-flickity='{"autoPlay":2000}' style={{background:'none'}} data-aos="fade-up" data-aos-duration="2000">
            <div className='carousel-group-escudos'>
              <img src={bilbao} alt='' className='carousel-img-escudo'></img>
              
            </div>
            <div className='carousel-group-escudos'>
              <img src={madrid} alt='' className='carousel-img-escudo'></img>
              
            </div>
            <div className='carousel-group-escudos'>
              <img src={sevilla} alt='' className='carousel-img-escudo'></img>
             
            </div>
            <div className='carousel-group-escudos'>
              <img src={bacerlona} alt='' className='carousel-img-escudo'></img>              
            </div>  
             
            <div className='carousel-group-escudos'>
              <img src={betis} alt='' className='carousel-img-escudo'></img>              
            </div>
            <div className='carousel-group-escudos'>
              <img src={atletico} alt='' className='carousel-img-escudo'></img>              
            </div>
            
            <div className='carousel-group-escudos'>
              <img src={valladolid} alt='' className='carousel-img-escudo'></img>              
            </div>

            <div className='carousel-group-escudos'>
              <img src={real} alt='' className='carousel-img-escudo'></img>              
            </div>

          </div>

        </Flickity>
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


      {/********MOBILE******* */}

      <div className='landing-two-div-one'>
        <h2 className='landing-two-h2-underline' data-aos="fade-up" data-aos-duration="2000">How?</h2>
        
          <div className='carrusel-flex'>
            {/* <div className='landing-two-div-three-container' data-aos="fade-up" data-aos-duration="2000">
              <img src={icono1} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
              <div className='landing-two-div-three-group'>
                <h2 className='landing-two-div-three-title'>MIND BLOWING <br /> EXPERIENCES</h2>                
              </div>
              <p className='landing-two-div-three-text'>Attractive experiences of all types (matches, tours, training, events…) using  tech (AR,/VR) and physical resources (stadium, players..)</p>
            </div> */}

            <div className='landing-two-div-three-container' data-aos="fade-up" data-aos-duration="2000">
              <img src={icono1} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
              <div className='landing-two-div-three-group'>
                <h2 className='landing-two-div-three-title'>MIND BLOWING <br /> EXPERIENCES</h2>
                
              </div>
              <ul style={{padding:10}}>
                <li className='landing-two-div-three-text'>Attractive experiences of all types<br></br> (matches, tours, training, events…) using  tech (AR,/VR) and physical resources (stadium, players..)</li>                                
              </ul>
              {/* <p className='landing-two-div-three-text'>Attractive experiences of all types<br></br> (matches, tours, training, events…) using  tech (AR,/VR) and physical resources (stadium, players..)</p> */}
            </div>

            <div className='landing-two-div-three-container' data-aos="fade-up" data-aos-duration="2000">
              <img src={icono2} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
              <div className='landing-two-div-three-group'>
                <h2 className='landing-two-div-three-title'>EVERY DAY EXCLUSIVE <br />EXPERIENCES</h2>
                
              </div>
              <ul style={{padding:10}}>
                <li className='landing-two-div-three-text'>Creating exclusive sales of our experience with partner clubs in match and non match days</li>                                
              </ul>
              {/* <p className='landing-two-div-three-text'>Creating exclusive sales of our experience with partner clubs in match and non match days</p> */}
            </div>

            <div className='landing-two-div-three-container' data-aos="fade-up" data-aos-duration="2000">
              <img src={icono3} alt='' className='landing-two-div-three-image' style={{width:50, marginBottom:20}}></img>
              <div className='landing-two-div-three-group'>
                <h2 className='landing-two-div-three-title'>REACHING THE FOOTBALL<br />  COMMUNITY</h2>
                
              </div>
              <ul style={{padding:10}}>
                <li className='landing-two-div-three-text'>Having direct too loyal fans who are willing to buy products with the support of clubs.</li>
                <li className='landing-two-div-three-text'>Internationalisation expansion.</li>
                <li className='landing-two-div-three-text'>Expanding our offering worldwide and adding new clubs to our marketplace</li>
              </ul>
              {/* <p className='landing-two-div-three-text'> Having direct too loyal fans who are willing to buy products with the support of clubs.</p> 
              <p className='landing-two-div-three-text'> Internationalisation expansion.</p> 
              <p className='landing-two-div-three-text'>Expanding our offering worldwide and adding new clubs to our marketplace</p> */}
            </div>
          </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img className='landing-two-img-bus display-dk' src={bus} alt=''></img>
              <img className='landing-two-img-bus display-mv' src={busmv} alt=''></img>
            </div>
        </div>
      </div>



      <div className='landing-two-div-four-container'>
        <h2 className='landing-two-div-four-title landing-two-h2-new-underline' data-aos="fade-up" data-aos-duration="2000"> <span className='four-span'>WINNERS!</span> </h2>
        <div className='landing-two-div-four-divs' data-aos="fade-up" data-aos-duration="2000">
          <div className='landing-two-div-four-divs-p'>            
            <p><b>First prize of Google for Startups competition 2021!</b> <br /> Thanks for the trust of our clients and club partners we showcase in this competition our new experiences and how fans are enjoying them!</p>
            <img src={google} alt='' className='landing-two-div-four-image'></img>
          </div>          
          {/* <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p><span className='last-span'>3,98M€</span> de 2778 Good Rebels</p>
          </div> */}
        </div>
        <div className='landing-two-div-four-divs' data-aos="fade-up" data-aos-duration="2000">
          <div className='landing-two-div-four-divs-p'>            
          <img src={lanzadera} alt='' className='landing-two-div-four-image'></img>
            <p><strong>Bstadium has joined the growth accelerator program of Lanzadera, the biggest startups hub in Spain.</strong></p>
            
          </div>          
          {/* <div className='landing-two-div-four-divs-p'>
            <img src={image} alt='' className='landing-two-div-four-image'></img>
            <p><span className='last-span'>3,98M€</span> de 2778 Good Rebels</p>
          </div> */}
        </div>  
      </div>
      
    
      

      <Flickity>  
          <div className='carousel' data-flickity='{"autoPlay":2000}'>
            <div className='carousel-group'>
              <img src={emprendedores} alt='' className='carousel-img'></img>
              <p>"The Spanish company that brings sports closer to fans during the pandemic"</p>
            </div>
            <div className='carousel-group'>
              <img src={elpais} alt='' className='carousel-img'></img>
              <p>"To deseasonalize and democratize the consumption of sports through the experiences offered in its marketplace"</p>
            </div>
            <div className='carousel-group'>
              <img src={economiesta} alt='' className='carousel-img'></img>
              <p>"Bstadium the innovative market place of sports leisure"</p>
            </div>
            <div className='carousel-group'>
              <img src={expansion} alt='' className='carousel-img'></img>
              <p>"Bstadium, a new sport and leisure offer to optimize revenues for clubs"</p>
            </div>

            <div className='carousel-group'>
              <img src={marca} alt='' className='carousel-img'></img>              
              <p>"Leo, we don't miss you anymore." That is the message in Spanish that many passersby on the main streets of the French capital have been able to see on a bus this morning."</p>
            </div>          
          </div>

        </Flickity>
        

    </div>
  )
}

export default LandingTwo