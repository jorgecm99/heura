import React, {useState} from 'react'
import  './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import image from '../../Assets/Images/image1.png';
import Typical from 'react-typical';
import vertical from './../../Assets/Videos/VERTICAL.mp4'
import Modal from './Modal';



export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModal, setIsModal] = useState(true)
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
                                    <li onClick={() => scrollTo('.landing-two-div-one')}>Game changers</li>
                                    <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>
                                    <li>Productos</li>
                                    <li>Press</li>
                                    <li>FAQS</li>
                    </div> : null
                }
                

                    </div>

                    <div className='dropdown-content-desktop'>
                        <li onClick={() => scrollTo('.landing-one-text')}>Misión</li>
                        <li onClick={() => scrollTo('.landing-two-div-one')}>Game changers</li>
                        <li onClick={() => scrollTo('.landing-three-title')}>Últimos 12 meses</li>
                        <li>Productos</li>
                        <li>Press</li>
                        <li>FAQS</li>
                    </div>

                </nav>

                <div className='header-text'>
                    <div>
                        <h3 className='header-title'>good rebels por un sistema alimentario{' '}
                        <Typical
                            loop={Infinity}
                            wrapper="span"
                            steps={[
                                'sostenible', 1000, 
                                'justo', 1000,
                                'delicioso', 1000,
                                'saludable', 1000
                            ]}
                            />
                            </h3>
                        <button className='btn-home'><a target="_blank" rel="noopener noreferrer" href='https://www.crowdcube.com/companies/heura-foods-for-tomorrow/pitches/lEm9rl'>Invierte ahora</a></button>
                        <p className='header-subtitle'>Capital en riesgo</p>
                    </div>
                    <div className='last-text'>
                        <p>
                            ¿Quieres unirte a una revolución y hacer un cambio positivo? Conviértete en 
                            accionista de una de las marcas más queridas y revolucionarias de Europa 
                            invirtiendo en LA campaña para aquellas personas que quieren actuar por un 
                            futuro mejor para el planeta, las personas y los animales.
                        </p>
                        <p>
                            Hace un año abrimos el <span className='span-style'>1er Equity for Good Rebels </span>y en un momento alucinante 
                            superamos nuestro objetivo inicial!
                        </p>
                    </div>
                    
                </div>
                <div>
                    
                </div>


                <div className='header-div-container'>

                </div>

                <div  className='video-mobile'>
                <video muted loop autoPlay>
                    <source src={vertical} type="video/mp4"></source>
                    Tu navegador no soporta los vídeos de HTML5
                </video>
                <button className='header-video-btn' onClick={() => setIsModal(true)}>Compartir</button>

                <Modal open={isModal} onClose={() => setIsModal(false)}>
                
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
                </Modal>
                
                
                
                </div>

            </div>
            
        </header>
    )
}
