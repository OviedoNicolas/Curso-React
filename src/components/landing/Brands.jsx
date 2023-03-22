import React from 'react'
import bandidos  from '../../img/brands/Bandidos.svg'
import hood  from '../../img/brands/RedHood.svg'
import stone  from '../../img/brands/WizardsN.svg'
import arthur from '../../img/brands/SirArthur.svg'
import love  from '../../img/brands/Love&TearsN.svg'
import espada  from '../../img/brands/LaEspadaN.svg'


export const Brands = () => {
return (
    <div className='marcasContainer'>
        <h3>Trabajamos con las mejores marcas</h3>
        <div className='marcas'>
            <div className='blanco'></div>
            <div className='negro'></div>
            <div className='blanco'>
                <img src={bandidos} alt="" />
            </div>
            <div className='negro'>
                <img src={stone} alt="" />
            </div>
            <div className='blanco'>
                <img src={hood} alt="" />
            </div>
            <div className='negro'></div>
            <div className='blanco'></div>
            <div className='negro'></div>
            <div className='blanco'></div>
            <div className='negro'>
                <img src={espada} alt="" />
            </div>
            <div className='blanco'>
                <img src={arthur} alt="" />
            </div>
            <div className='negro'>
                <img src={love} alt="" />
            </div>
            <div className='blanco'></div>
            <div className='negro'></div>
        </div>
    </div>
    )
}
