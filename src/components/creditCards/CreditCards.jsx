import React from 'react'
import vitas from '../../img/cards/vitas.png'
import magic from '../../img/cards/magicCard.png'
import kingdom from '../../img/cards/kingdom.png'

export const CreditCards = () => {
  return (
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
  )
}
