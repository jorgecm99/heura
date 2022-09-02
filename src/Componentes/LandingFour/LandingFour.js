import React, {useState} from 'react'
import './LandingFour.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); 

const LandingFour = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='landing-four'>
        <div className='landing-four-title'>
        <h1 className='landing-four-title-text' data-aos="fade-up" data-aos-duration="2000">faqs</h1>
        </div>
        <div className='landing-four-dropdown'>
            <div className='landing-four-dropdown-main' data-aos="fade-up" data-aos-duration="2000">
            <h4 className='landing-four-dropdown-title'>¿cuándo se lanzará la campaña?</h4>
            <div className='landing-four-dropdown-icon'>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen(false)}/>
                                : <FontAwesomeIcon icon={faPlus} style={{color:"white"}} onClick={()=>setIsMenuOpen(true)}/>
                        }
                        </div>
                        </div>

                        {
                            isMenuOpen ? 
                                <div className='landing-four-dropdown-content'>
                                    <p className='landing-four-dropdown-content-text'>
                                    Se lanzará al público general en abril de 2022. Para nuestros amigos 
                                    registrados previamente, tendrán acceso exclusivo para invertir en la 
                                    plataforma 48 horas antes de la fecha oficial. Os avisaremos de la fecha 
                                    exacta con antelación ;-)
                                    </p>
                    </div> : null
                }
        </div>

    </div>
  )
}

export default LandingFour