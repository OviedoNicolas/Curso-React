import React, { useState } from 'react'

export const ItemCount = ({stock, onAdd}) => {

const [cantidad, setCantidad] = useState(1)

  return (
    stock ?
    <div className='contadorContainer'>
        <div className='contador'>
            <button className={cantidad === 1 ? 'disabled' : 'resta'} onClick={() =>  setCantidad (cantidad - 1) } disabled = {cantidad === 1}>
                -
            </button>
            <div>
                <p>{cantidad}</p>
            </div>
            <button className={stock === cantidad ? 'disabled' : 'suma' } onClick={() => setCantidad (cantidad + 1)} disabled = {cantidad === stock}>
                +
            </button>
        </div>
        <div>
            <button className='agregar' onClick={() => {onAdd()}}>Agregar</button>
        </div>
    </div>
    : 
    
    <div className='agotado'>
        <p>Agotado</p>   
    </div>
  )
}
