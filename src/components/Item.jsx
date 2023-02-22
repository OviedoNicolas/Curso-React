import React from 'react' 

export const Item = ({ foto,titulo, precio }) => {
  return (
    <div className='card'>
        <div className='cardFoto'>
            <img src={foto} alt={titulo} />
        </div>
        <p>{titulo}</p>
        <p>₹ {precio}</p>
        <button className='detalles'>
            Ver detalles
        </button>
    </div>
  )
}