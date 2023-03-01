import React, { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount'
import vitas from '../../img/vitas.png'
import magic from '../../img/magicCard.png'
import kingdom from '../../img/kingdom.png'
import data from '../data'
import { useParams } from 'react-router-dom'

export const ItemDetail = () => {

  const { productoId } = useParams()
  const [producto, setProducto] = useState()


useEffect(() => {
  const getProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data.length){
        resolve(data.find(producto => producto.id === productoId))
      } else {
        reject("No hay productos para mostrar")
      }
    }, 2000)
  })

  setProducto ()
  getProducto
  .then(res => {
    setProducto (res)
  })
  .catch(err => {
      <p>{err}</p>
  })
}, [productoId])


  return (
    producto ?

    <div key={producto.id} className='detailContainer'>
        <div className='detailFoto'>
            <img src= {require(`../../img/productos/${producto.img}`)} alt={producto.nombre}/>
        </div>
        <div className='detailProducto'>
            <h2 className='detailTitulo'>{producto.nombre}</h2>
            <h3 className='detailPrecio'>₹ {producto.precio}</h3>
            <p className='detailDescripcion'>{producto.descripcion}</p>
            <ItemCount stock={producto.stock} />
            <p>En stock: {producto.stock} </p>
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
    :

    <div className='detailContainer'>
      <h2 className='mensaje'>Cargando...</h2>
    </div>
  )
}
