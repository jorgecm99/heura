import React, {useState} from 'react';
import './LandingOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import image from '../../Assets/Images/image1.png';


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
                    <img src={image} alt=''></img>
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
                                    <li onClick={() => scrollTo('.landing-two-div-one')}>Game changers</li>
                                    <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>
                                    <li>Productos</li>
                                    <li>Press</li>
                                    <li>FAQS</li>
                    </div> : null
                }
                </div>
                      <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://www.crowdcube.com/companies/heura-foods-for-tomorrow/pitches/lEm9rl'>Invierte ahora</a></button>
                    </div>
                    
                </nav>

                <div className='landing-one-text'>
                    <div>
                        <h2 className='landing-one-title'>invierte en un futuro (alimentario) mejor a través de una empresa<span className='landing-one-title-underline'> creada con una misión</span></h2>
                    </div>
                    <div className='landing-one-last-text'>
                        <p>
                            Existimos para empoderar a las personas para <strong>transformar el sistema alimentario </strong> 
                            actual en uno más sostenible, minimizando el uso de los recursos de nuestro planeta y protegiendo 
                            a los animales, el medio ambiente y nuestra salud.
                        </p>
                        <p>
                        Estamos de regreso para ofrecer una vez más la oportunidad a la comunidad de Good Rebel de invertir en 
                        Heura y unirse a nosotros en nuestro viaje a medida que crecemos.
                        </p>
                    </div>
                    
                </div>
                <div className='landing-btn-group' >
                      <button className='landing-one-btn'><a target="_blank" rel="noopener noreferrer" href='https://www.crowdcube.com/companies/heura-foods-for-tomorrow/pitches/lEm9rl'>Invierte ahora</a></button>
                      <p className='landing-one-subtitle'>Capital en riesgo</p>
                </div>
                <div className='landing-one-img'>
                  <img src={image} alt=''></img>
                </div>
                        
            </div>
    
  )
}

export default LandingOne