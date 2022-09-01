import React from 'react';
import './LandingThree.css'

const LandingThree = () => {
  return (
    <div className='landing-three'>
      <div className='landing-three-title'>
        <h1 className='landing-three-title-text'>What's happened</h1>
        <h1 className='landing-three-title-text'>over the last <span className='span-landing-three-title'>9</span> </h1>
        <h1 className='landing-three-title-text'><span className='span-landing-three-title'>months?</span></h1>
      </div>
      
      <div className='landing-three-card-three'>
          <h1 className='landing-three-card-two-black'>Highlights</h1> 
          <p style={{color:"white"}}>Hemos conseguido el liderazgo de mercado en España: <strong>1ª marca plant-based <span className='strong-underline'>por rotación y cuota de mercado.</span></strong></p>
      </div>
      <div className='landing-three-card-one'>
        <h1 className='landing-three-card-one-title'>Business</h1>
        <h1 className='landing-three-card-two-black'>Highlights</h1>      
        <p style={{color:"white", lineHeight:2.2}}><strong className='strong-underline'>Tripled revenue</strong> in 2022 reaching +500k€ Q1 & Q2 '22 <strong className='strong-underline'>grew by 125%</strong> in comparison with the previous period.</p>
        <p style={{color:"white", lineHeight:2.2}}><strong className='strong-underline'> More than</strong> <strong className='strong-underline'>3,000 football experiences sold</strong> 17 clubs in 1 market (Spain)</p>        
      </div> 

      <div className='landing-three-card-two'>                
        <h1 className='landing-three-card-two-black'>Products</h1>
        <p style={{color:"white", lineHeight:2.2, marginTop:20}}><strong className='strong-underline'>Tripled revenue</strong> in 2022 reaching +500k€ Q1 & Q2 '22 <strong className='strong-underline'>grew by 125%</strong> in comparison with the previous period.<br /> More than <strong className='strong-underline'>3,000 football experiences sold</strong> 17 clubs in 1 market (Spain)</p>
      </div>
      

      <div className='landing-three-card-three'>
      <h1 className='landing-three-card-one-title'>Business</h1>
      <p style={{color:"white"}}>Hemos conseguido el liderazgo de mercado en España: <strong>1ª marca plant-based <span className='strong-underline'>por rotación y cuota de mercado.</span></strong></p>
      </div>

      <div className='landing-three-card-one'>
        <h1 className='landing-three-card-one-title'>Business</h1>
        <h1 className='landing-three-card-two-black'>Highlights</h1>      
        <p style={{color:"white", lineHeight:2.2}}><strong className='strong-underline'>Tripled revenue</strong> in 2022 reaching +500k€ Q1 & Q2 '22 <strong className='strong-underline'>grew by 125%</strong> in comparison with the previous period.</p>
        <p style={{color:"white", lineHeight:2.2}}><strong className='strong-underline'> More than</strong> <strong className='strong-underline'>3,000 football experiences sold</strong> 17 clubs in 1 market (Spain)</p>        
      </div> 

      <div className='landing-three-card-three'>
          <h1 className='landing-three-card-one-title'>Business</h1>
          <p style={{color:"white"}}>Hemos conseguido el liderazgo de mercado en España: <strong>1ª marca plant-based <span className='strong-underline'>por rotación y cuota de mercado.</span></strong></p>
      </div>

    </div>
  )
}

export default LandingThree