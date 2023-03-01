import React from 'react'
import bandidos  from '../../img/Bandidos.svg'
import hood  from '../../img/RedHood.svg'
import stone  from '../../img/WizardsN.svg'
import arthur from '../../img/SirArthur.svg'
import love  from '../../img/Love&TearsN.svg'
import espada  from '../../img/LaEspadaN.svg'


export const Brands = () => {
  return (
    <div className='marcasContainer'>
        <div className='blanco'>
            <img src={bandidos} alt="" />
        </div>
        <div className='negro'>
            <img src={stone} alt="" />
        </div>
        <div className='blanco'>
            <img src={hood} alt="" />
        </div>
        <div className='negro'>
            <img src={espada} alt="" />
        </div>
        <div className='blanco'>
            <img src={arthur} alt="" />
        </div>
        <div className='negro'>
            <img src={love} alt="" />
        </div>
    </div>
  )
}
