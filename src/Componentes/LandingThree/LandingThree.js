import React from 'react';
import './LandingThree.css'

const LandingThree = () => {
  return (
    <div className='landing-three'>
      <div className='landing-three-container-desktop'>
      <div className='landing-three-title'>
        <h1 className='landing-three-title-text'>¿qué ha</h1>
        <h1 className='landing-three-title-text'>pasado estos</h1>
        <h1 className='landing-three-title-text'>últimos <span className='span-landing-three-title'>12 meses?</span></h1>
      </div>
      
      <div className='landing-three-card-group'>
        <div className='landing-three-card-one'>
        <div className='landing-three-card-one-maintext'>
          <h1 className='landing-three-card-one-title'>resultados de la</h1>
          <h1 className='landing-three-card-one-title'>misión</h1>
          <h1 className='landing-three-card-one-black'>en 2021 nosotras:</h1>
        </div>
          <p className='landing-three-card-one-para'>Ahorramos los litros de agua equivalentes a <strong className='strong-underline'>100.655.687</strong> baños</p>
          <p className='landing-three-card-one-para'>Ahorramos el equivalente de CO2 de <strong className='strong-underline'>59.033.858 </strong>kms recorridos en automóvil</p>
          <p className='landing-three-card-one-para'>Salvamos <strong className='strong-underline'>728.122</strong> vidas animales</p>
          <p className='landing-three-card-one-grey'>Nuestros ahorros ambientales son estimaciones basadas en investigaciones internas que utilizan nuestro
           volumen de ventas de 2021 y cifras verificadas de consumo de CO2.</p>
        </div> 

        <div className='landing-three-card-two'>
        <div className='landing-three-card-one-maintext'>
          <h1 className='landing-three-card-two-title'>aspectos</h1>
          <h1 className='landing-three-card-two-title'>destacados</h1>
          <h1 className='landing-three-card-two-black'>del negocio</h1>
        </div>
          <p className='landing-three-card-one-para'><strong className='strong-underline'>Triplicamos los ingresos</strong> en 2021 alcanzando los 17,7M€</p>
          <p className='landing-three-card-one-para'>Más de <strong className='strong-underline'>12.500 puntos de venta en todo el mundo</strong></p>
          <p className='landing-three-card-one-para'><strong className='strong-underline'>22 países</strong></p>
          <p className='landing-three-card-two-grey'>*basado en Ingresos de €17,7M <br />y -5,7M EBITDA para 2021</p>
        </div>
      </div>
      </div>
      

      <div className='landing-three-card-three'>
        <p>Hemos conseguido el liderazgo de mercado en España: <strong>1ª marca plant-based <span className='strong-underline'>por rotación y 
          cuota de mercado.</span></strong></p>
      </div>
    </div>
  )
}

export default LandingThree