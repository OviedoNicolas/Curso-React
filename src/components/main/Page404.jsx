import React from 'react'
import cabelleroBuscando from '../../img/caballeroBuscando.png'

export const Page404 = () => {
  return (
    <div className='container404'>
      <h1>404</h1>
      <div className='caballero404'>
        <img src={cabelleroBuscando} alt="dibujo de caballero" />
      </div>
      <div className='caballero404Reversa'>
        <img src={cabelleroBuscando} alt="dibujo de caballero" />
      </div>
      <p className='mensaje'>Lo Sentimos. Página no encontada</p>
    </div>
  )
}
