import React from 'react';
import './LandingThree.css';



import desafioSevillaPitchmin from '../../Assets/Images/desafioSevillaPitchmin.jpg';
import granada from '../../Assets/Images/tourgranada.jpg';
/* import experienciasinteractivas from '../../Assets/Images/experiencias-interactivas-min.jpg'; */
import toursoriginales from '../../Assets/Images/tours-originales-de-futbol-min.jpg';
/* import tourinteractivos from '../../Assets/Images/tour-interactivos-por-estadios-y-planes-de-ocio-min.jpg'; */
import entrenamientos from '../../Assets/Images/enfrentamiento-o-actividades-grupales-min.jpg';
import seleccion from '../../Assets/Images/entrena-con-la-seleccion-min.jpg';
import eventos from '../../Assets/Images/eventos-corporativos-min.jpg';
import entradas from '../../Assets/Images/entradas-exclusivas-y-fan-zones-min.jpg';
import match from '../../Assets/Images/match-experience.png';



const LandingThree = () => {
  return (
    <div className='landing-three'>
      <div className='landing-three-title' data-aos="fade-up" data-aos-duration="2000">
        <h1 className='landing-three-title-text'>What's happened</h1>
        <h1 className='landing-three-title-text'>over the last <span className='span-landing-three-title'>9</span> </h1>
        <h1 className='landing-three-title-text'><span className='span-landing-three-title'>months?</span></h1>
      </div>
            
      <div className='landing-three-card-three' data-aos="fade-up" data-aos-duration="2000">
        <h1 className='landing-three-card-one-title'>Business</h1>
        <h1 className='landing-three-card-two-black'>Highlights</h1>
        <ul>
          <li style={{color:"white", lineHeight:2.2, textAlign:'left'}}><strong className='strong-underline'> Tripled revenue</strong> in 2022 reaching +500k€.</li>
          <li style={{color:"white", lineHeight:2.2, textAlign:'left'}}>Q1 & Q2 '22 <strong className='strong-underline'>grew by 125%</strong> in comparison with the previous period.</li>
          <li style={{color:"white", lineHeight:2.2, textAlign:'left'}}><strong className='strong-underline'> More than</strong> <strong className='strong-underline'>3,000 football experiences sold</strong> 17 clubs in 1 market (Spain)</li>
        </ul>             
      </div>

      <div className='landing-three-card-one' data-aos="fade-up" data-aos-duration="2000">
      <h1 className='landing-three-card-one-title'>PRODUCTS</h1>
      <p style={{color:"white", lineHeight:2.2}}>We have launched our spectaculars experiences.</p>
                                           
      </div> 

      <div className='landing-three-card-one' data-aos="fade-up" data-aos-duration="2000">
          <h1 className='landing-three-card-two-title'>Interactive</h1>
          <h1 className='landing-three-card-two-black'>Tours</h1>                              
          <div style={{marginTop:20}}>          
            <img src={granada} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:0, marginBottom:20, borderRadius:10}}></img>          
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/granada-cf/tour-por-el-nuevo-los-carmenes-estadio-de-granada-cf/'>Discover it!</a></button>
          </div>               
      </div> 

      <div className='landing-three-card-three' data-aos="fade-up" data-aos-duration="2000">
        <h1 className='landing-three-card-two-black'>Exclusive Tickets &</h1>
        <h1 className='landing-three-card-two-title'>Fan Zones</h1>                               
          <div style={{marginTop:20}}>          
            <img src={entradas} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:0, marginBottom:20, borderRadius:10}}></img>          
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/entradas-de-partidos/'>Get your tickets!</a></button>
          </div>               
      </div> 

      <div className='landing-three-card-one' data-aos="fade-up" data-aos-duration="2000">        
          <h1 className='landing-three-card-one-title'>Original Tours</h1>                                
          <div style={{marginTop:20}}>          
            <img src={toursoriginales} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:0, marginBottom:20, borderRadius:10}}></img>          
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/real-madrid-cf/tour-por-el-estadio-santiago-bernabeu-y-ruta-turistica-madrid-y-el-futbol/'>See more!</a></button>
          </div>               
      </div> 

      <div className='landing-three-card-three' data-aos="fade-up" data-aos-duration="2000">        
          <h1 className='landing-three-card-one-black'>Training with </h1>
          <h1 className='landing-three-card-two-title'>the national team</h1>                                
          <div style={{marginTop:20}}>          
            <img src={seleccion} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:0, marginBottom:20, borderRadius:10}}></img>          
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/salta-al-campo/entrena-como-la-seleccion-espanola-iniciacion/'>See more!</a></button>
          </div>               
      </div> 

      <div className='landing-three-card-one' data-aos="fade-up" data-aos-duration="2000">        
          <h1 className='landing-three-card-one-title'>Corporate events &</h1>    
          <h1 className='landing-three-card-one-black'>digital experiences</h1>                            
          <div style={{marginTop:20}}>          
            <img src={eventos} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:0, marginBottom:20, borderRadius:10}}></img>          
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/real-madrid-cf/tour-por-el-estadio-santiago-bernabeu-y-ruta-turistica-madrid-y-el-futbol/'>See more!</a></button>
          </div>               
      </div> 
         

      <div className='landing-three-card-three' data-aos="fade-up" data-aos-duration="2000">
          <h1 className='landing-three-card-two-black'>Trainings &</h1> 
          <h1 className='landing-three-card-two-title'>group activities</h1>
          <img src={entrenamientos} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:50, marginBottom:20, borderRadius:10}}></img>
          <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://bstadium.es/real-madrid-cf/tour-por-el-estadio-santiago-bernabeu-y-ruta-turistica-madrid-y-el-futbol/'>See more!</a></button>
      </div>

      <div className='landing-three-card-one' data-aos="fade-up" data-aos-duration="2000">        
          <h1 className='landing-three-card-one-title'>Match Days</h1>
          
          <div style={{marginTop:20}}>          
            <img src={match} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:0, marginBottom:20, borderRadius:10}}></img>          
            <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://vimeo.com/677679114'>See more!</a></button>
          </div>               
      </div> 

      <div className='landing-three-card-three' data-aos="fade-up" data-aos-duration="2000">
          <h1 className='landing-three-card-one-title'>New launching!</h1>
          <h1 className='landing-three-card-two-black'>Challenge Sevilla</h1>
          <img src={desafioSevillaPitchmin} alt='' className='landing-two-div-three-image' style={{width:250,marginTop:30, marginBottom:20}}></img>
          <button className='btn-landing'><a target="_blank" rel="noopener noreferrer" href='https://desafioestadiosevilla.com/'>See more!</a></button>
      </div>

                          

    </div>
  )
}

export default LandingThree