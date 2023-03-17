import React from 'react' 
import { Link } from 'react-router-dom'



export const Item = ({id, img, name, price}) => {

  return (
      <div className='card'>
          <div className='cardFoto'>
              <img src={img} alt={name}/>
          </div>
          <p>{name}</p>
          <p>₹ {price}</p>
          <Link className='detalles' to={`/producto/${id}`}>
            Ver detalles
          </Link>
      </div>
    )
}