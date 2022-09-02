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
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);
    const [isMenuOpen4, setIsMenuOpen4] = useState(false);
    const [isMenuOpen5, setIsMenuOpen5] = useState(false);
    /* const [isMenuOpen6, setIsMenuOpen6] = useState(false);
    const [isMenuOpen7, setIsMenuOpen7] = useState(false); */

  return (
    <div className='landing-four'>
        <div className='landing-four-title'>
        <h1 className='landing-four-title-text' data-aos="fade-up" data-aos-duration="2000">faqs</h1>
        </div>
        <div className='landing-four-dropdown'>
            <div className='landing-four-dropdown-main' data-aos="fade-up" data-aos-duration="2000">
            <h4 className='landing-four-dropdown-title'>When will the campaign go live?</h4>
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
                                    It’s going live to the wider public in April 2022. For our pre-registered friends, you will have exclusive access to invest on the platform 48hrs prior to this. We’ll let you know the exact date in advance ;-)
                                    </p>
                    </div> : null
                }
        </div>

        <div className='landing-four-dropdown'>
            <div className='landing-four-dropdown-main' data-aos="fade-up" data-aos-duration="2000">
            <h4 className='landing-four-dropdown-title'>Who can invest?</h4>
            <div className='landing-four-dropdown-icon'>
                        {
                            isMenuOpen2 ?
                                 <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen2(false)}/>
                                : <FontAwesomeIcon icon={faPlus} style={{color:"white"}} onClick={()=>setIsMenuOpen2(true)}/>
                        }
                        </div>
                        </div>

                        {
                            isMenuOpen2 ? 
                                <div className='landing-four-dropdown-content'>
                                    <p className='landing-four-dropdown-content-text'>
                                    You must be over 18 years old and legally entitled to invest.
                                    </p>
                    </div> : null
                }
        </div>

        <div className='landing-four-dropdown'>
            <div className='landing-four-dropdown-main' data-aos="fade-up" data-aos-duration="2000">
            <h4 className='landing-four-dropdown-title'>Can you explain your Ebitda?</h4>
            <div className='landing-four-dropdown-icon'>
                        {
                            isMenuOpen3 ?
                                 <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen3(false)}/>
                                : <FontAwesomeIcon icon={faPlus} style={{color:"white"}} onClick={()=>setIsMenuOpen3(true)}/>
                        }
                        </div>
                        </div>

                        {
                            isMenuOpen3 ? 
                                <div className='landing-four-dropdown-content'>
                                    <p className='landing-four-dropdown-content-text'>
                                    Our EBITDA for FY21 reached €6M negative. This is driven by the fact that we are a company investing in growth and therefore are adding resources first to collect gains in the future, creating a loss in the initial stage.                                    
                                    </p>
                                    <p className='landing-four-dropdown-content-text'>                                    
                                    International expansion is one of the biggest bets. However, our business is still at a very early stage in the majority of the countries so this increases the impact on a negative EBITDA.
                                    </p>
                    </div> : null
                }
        </div>

        <div className='landing-four-dropdown'>
            <div className='landing-four-dropdown-main' data-aos="fade-up" data-aos-duration="2000">
            <h4 className='landing-four-dropdown-title'>What's next?</h4>
            <div className='landing-four-dropdown-icon'>
                        {
                            isMenuOpen4 ?
                                 <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen4(false)}/>
                                : <FontAwesomeIcon icon={faPlus} style={{color:"white"}} onClick={()=>setIsMenuOpen4(true)}/>
                        }
                        </div>
                        </div>

                        {
                            isMenuOpen4 ? 
                                <div className='landing-four-dropdown-content'>
                                    <p className='landing-four-dropdown-content-text'>
                                    We will be in touch with you over the next few days with more information on our crowd raise, how to do it and which rights this gives to you. Make sure you’re signed up to Crowdcube early - seriously, don’t wait till the day. Tell all your friends to do the same!
                                    </p>
                    </div> : null
                }
        </div>

        <div className='landing-four-dropdown'>
            <div className='landing-four-dropdown-main' data-aos="fade-up" data-aos-duration="2000">
            <h4 className='landing-four-dropdown-title'>When will they become shares?</h4>
            <div className='landing-four-dropdown-icon'>
                        {
                            isMenuOpen5 ?
                                 <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen5(false)}/>
                                : <FontAwesomeIcon icon={faPlus} style={{color:"white"}} onClick={()=>setIsMenuOpen5(true)}/>
                        }
                        </div>
                        </div>

                        {
                            isMenuOpen5 ? 
                                <div className='landing-four-dropdown-content'>
                                    <p className='landing-four-dropdown-content-text'>
                                    The invested resources will be converted into shares when we close the future financing round. Crowdcube will automatically contact Heura Foods to ensure that the conversion occurs at the appropriate point and they will send you an email when the actions are issued so that you can download your declaration of beneficial ownership in your Crowdcube profile.
                                    </p>
                    </div> : null
                }
        </div>
    
        <div>
            <div className='landing-two-div-four-container footer' data-aos="fade-up" data-aos-duration="2000">
            <div className='landing-two-div-four-title landing-two-h2-new-underline footer-text'>Want to <br></br> know more?</div>        
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/quienes-somos/'>Contact us</a></button>
        </div>
    </div>

    </div>
  )
}

export default LandingFour