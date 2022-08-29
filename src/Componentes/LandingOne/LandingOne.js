import React from 'react';
import './LandingOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import image from '../../Assets/Images/image1.png';

const LandingOne = () => {
  return (
            <div className='landing-one'>

                <nav className='landing-one-header'>
                    <img src={image} alt=''></img>
                    <div className='landing-one-header-right'>
                      <div className='dropdown'>
                          <div className='dropdown-icon'>
                              <FontAwesomeIcon icon={faAngleDown} style={{color:"black"}}/>

                          </div>
                      </div>
                      <button className='btn-landing'>Invierte ahora</button>
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
                      <button className='landing-one-btn'>Invierte ahora</button>
                      <p className='landing-one-subtitle'>Capital en riesgo</p>
                </div>
                <div className='landing-one-img'>
                  <img src={image} alt=''></img>
                </div>
                        
            </div>
    
  )
}

export default LandingOne