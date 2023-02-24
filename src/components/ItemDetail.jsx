import React from 'react'
import { ItemCount } from './ItemCount'
import ejemplo from '../img/armas/557.png'
import vitas from '../img/vitas.png'
import magic from '../img/magicCard.png'
import kingdom from '../img/kingdom.png'

export const ItemDetail = () => {
  return (
    <div className='detailContainer'>
        <div className='detailFoto'>
            <img src={ejemplo} alt="" />
        </div>
        <div className='detailProducto'>
            <h2 className='detailTitulo'>Espada Excalibur</h2>
            <h3 className='detailPrecio'>₹ 1800</h3>
            <p className='detailDescripcion'>Legendaria espada Excalibur, sí, esa Excalibur, de la roca a tus manos. Siente el poder de un verdadero rey, y sobre todo que tu enemigo sienta el poder de un verdadero rey.</p>
            <ItemCount stock={20} />
            <p>En stock: </p>
            <p>En carrito: </p>
            <div className='tarjetasContainer'>
              <div className='tarjetasImg'>
                <img src={vitas} alt="" />
              </div>
              <div className='tarjetasImg'>
                <img src={magic} alt="" />
              </div>
              <div className='tarjetasImg'>
                <img src={kingdom} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}
