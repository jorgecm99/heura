import React, {useState} from 'react'
import  './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import image from '../../Assets/Images/image1.png';
import Typical from 'react-typical';
import vertical from './../../Assets/Videos/VERTICAL.mp4'
//import Modal from './Modal';
import HorizontalScroll from 'react-scroll-horizontal';



export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //const [isModal, setIsModal] = useState(true)
    //const [show, setShow] = useState(false);

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)

        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return(
        <header>
            <div className='header'>

                <nav className='header-style'>
                    <img src={image} alt=''></img>
                    <div className='dropdown'>
                        <div className='dropdown-icon'>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon icon={faAngleUp} style={{color:"white"}} onClick={()=>setIsMenuOpen(false)}/>
                                : <FontAwesomeIcon icon={faAngleDown} style={{color:"white"}} onClick={()=>setIsMenuOpen(true)}/>
                        }
                        </div>

                        {
                            isMenuOpen ? 
                                <div className='dropdown-content'>
                                    <li onClick={() => scrollTo('.landing-one-text')}>Misión</li>
                                    <li onClick={() => scrollTo('.landing-two-div-one')}>Nuestros Valores</li>
                                    <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>                                    
                                    <li>FAQS</li>
                    </div> : null
                }
                

                    </div>

                    <div className='dropdown-content-desktop'>
                        <li onClick={() => scrollTo('.landing-one-text')}>Misión</li>
                        <li onClick={() => scrollTo('.landing-two-div-one')}>Nuestros Valores</li>
                        <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>                        
                        <li>FAQS</li>
                    </div>

                </nav>

                <div className='header-text'>
                    <div>
                        <h3 className='header-title'>FOOTBALL FANS TO {' '}
                        <Typical
                            loop={Infinity}
                            wrapper="span"
                            steps={[
                                'discover', 1000, 
                                'enjoy', 1000,
                                'create', 1000
                                
                            ]}
                            /> NEW EXPERIENCES
                            </h3>
                        <button className='btn-home'><a target="_blank" rel="noopener noreferrer" href='https://www.crowdcube.com/companies/heura-foods-for-tomorrow/pitches/lEm9rl'>Invierte ahora</a></button>
                        {/* <p className='header-subtitle'>Capital en riesgo</p> */}
                    </div>
                    <div className='last-text'>
                        <p>
                        Want to join a revolution and feel more your passion for football? Become a shareholder of a game-changing sport marketplace in Europe by investing in THE campaign for those who want to benefit for creating new experiences to enjoy your favourite sport.
                        </p>
                        <p>
                        We are accelerated by Google for Startups creating unique experiences using tech and sport assets to live your sport passion everywhere and everyday! {/* <span className='span-style'>1er Equity for Good Rebels </span> */}
                        </p>
                    </div>        
                </div>
                


                <HorizontalScroll 
                 style={{width: '80vw'}}
                 reverseScroll={true}
                 pageLock={false}>

                <div className='header-horizontal-scroll'></div>

                </HorizontalScroll>


                
                

                {/*<Modal open={isModal} onClose={() => setIsModal(false)}>
                
                <div className='modal-container'>
                    <h1 className='modal-title'>share</h1>
                    
                    <div className='modal-group'>
                        <button className='modal-group-btn'>Facebook</button>
                        <button className='modal-group-btn'>Twitter</button>
                        <button className='modal-group-btn'>Linkedin</button>
                        <button className='modal-group-btn'>Instagram</button>
                    </div>

                    <div className='modal-copy-group'>
                        <p className='modal-ytb'>youtu.be/Z9m7fGdkBYM</p> 
                        <button className='modal-copy-btn'>Copy link</button>
                    </div>
                        </div>

                        <p className='modal-copied'>Copied link</p>
                </Modal>*/}
                
                
                
                

            </div>

            <div  className='video-mobile'>
                <video muted loop autoPlay>
                    <source src={vertical} type="video/mp4"></source>
                    Tu navegador no soporta los vídeos de HTML5
                </video>
                
            </div>
            {/*<button className='header-video-btn'>Compartir</button>*/}
            
            
        </header>
    )
}
