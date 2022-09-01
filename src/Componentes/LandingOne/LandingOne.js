import React, {useState} from 'react';
import './LandingOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/Images/image1.png';
import image from '../../Assets/Images/google-team.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); 


const LandingOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    //const [show, setShow] = useState(false);

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }
  return (
            <div className='landing-one'>

                <nav className='landing-one-header'>
                    <img src={logo} alt=''></img>
                    <div className='landing-one-header-right'>
                    <div className='landing-dropdown'>
                        <div className='landing-dropdown-icon'>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon icon={faAngleUp} style={{color:"black", width:'28'}} onClick={()=>setIsMenuOpen(false)}/>
                                : <FontAwesomeIcon icon={faAngleDown} style={{color:"black", width:'28'}} onClick={()=>setIsMenuOpen(true)}/>
                        }
                        </div>

                        {
                            isMenuOpen ? 
                                <div className='landing-dropdown-content'>
                                    <li onClick={() => scrollTo('.landing-one-text')}>Misión</li>
                                    <li onClick={() => scrollTo('.landing-two-div-one')}>Nuestros Valores</li>
                                    <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>                                    
                                    <li>FAQS</li>
                                </div> : null
                }
                </div>

                <div className='landing-dropdown-content-desktop'>
                                    <li onClick={() => scrollTo('.landing-one-text')}>Misión</li>
                                    <li onClick={() => scrollTo('.landing-two-div-one')}>Nuestros Valores</li>
                                    <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>                                    
                                    <li>FAQS</li>
                                </div>

                      <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/quienes-somos/'>Invierte ahora</a></button>
                    </div>
                    
                </nav>

                <div className='landing-one-container'>
                    <div className='landing-one-container-text'>
                            <div data-aos="fade-up" data-aos-duration="2000">
                                <h2 className='landing-one-title'>Invest in generating new experiences for your favourite sport by a  <span className='landing-one-title-underline'> mission made company</span></h2>
                            </div> 
                        <div className='landing-one-text'>
                            {/* <div>
                                <h2 className='landing-one-title'>Invest in generating new experiences for your favourite sport by a  <span className='landing-one-title-underline'> mission made company</span></h2>
                            </div>    */}                                 
                            <div className='landing-one-last-text' data-aos="fade-up" data-aos-duration="2000">
                                <p>We exist to surprise fans all over the world with our ¨never seen before¨ experiences mixing the reality with the virtual world to create this WOW effect experiences for clubs such as Real Madrid or FC Barcelona.</p>
                                <p>Take the opportunity to invest and create mind blowing experiences for +100 millions football fans only in LaLiga. Join us on our journey as we grow with + 3000 sold experiences only in the last 9 months!</p>
                            </div>  
                            <div className='landing-one-img'>
                                <img src={image} alt='' /* style={{width:290}} */></img>
                            </div>                  
                        </div>
                       {/*  <div className='landing-btn-group' >
                            <button className='landing-one-btn'><a target="_blank" rel="noopener noreferrer" href='https://www.crowdcube.com/companies/heura-foods-for-tomorrow/pitches/lEm9rl'>Invierte ahora</a></button>
                            <p className='landing-one-subtitle'>Capital en riesgo</p>
                        </div> */}
                    </div>
                

                  

                </div>

                
                
                        
            </div>
    
  )
}

export default LandingOne