import React from 'react'
import { ItemCount } from './ItemCount'
import ejemplo from '../img/555.jpg'

export const ItemDetail = () => {
  return (
    <div className='detailContainer'>
        <div className='detailFoto'>
            <img src={ejemplo} alt="" />
        </div>
        <div className='detailProducto'>
            <h2 className='detailTitulo'>Titulo producto</h2>
            <h3 className='detailPrecio'>$500</h3>
            <p className='detailDescripcion'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, reiciendis sapiente asperiores, culpa labore pariatur aut rem adipisci id quisquam ipsum animi quae accusamus non vel at praesentium alias quo.</p>
            <ItemCount stock={0} />
        </div>
    </div>
  )
}
