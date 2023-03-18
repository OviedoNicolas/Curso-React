import React, { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount'
import { Link, useParams } from 'react-router-dom'
import { getFirestore, doc , getDoc} from 'firebase/firestore'
import { Loader } from '../loader/Loader'
import { CreditCards } from '../creditCards/CreditCards'
import { CarouselProductos } from '../carousel/CarouselProductos'


export const ItemDetail = () => {

  const { productoId } = useParams()
  const [producto, setProducto] = useState()
  const [agregado, setAgregado] = useState(false)
  const [loading, setLoading] = useState(true)


useEffect(() => {

  const dataBase = getFirestore ()
  const itemDb = doc( dataBase, 'items' , productoId)
  getDoc (itemDb)
    .then(res => {if (res.data()) {
      setProducto({id: res.id, ...res.data()})
      setLoading (false)
    }else{
      setProducto()
      setLoading (false)
    }})


}, [productoId])

const onAdd = () => {
  setAgregado (true)
}


  return (
    loading ?
      <Loader loading={loading} />
    :
      producto ?
      <>
        <div key={producto.id} className='detailContainer'>
            <div className='detailFoto'>
                <img src= {producto.imgUrl} alt={producto.title}/>
            </div>
            <div className='detailProducto'>
                <h2 className='detailTitulo'>{producto.title}</h2>
                <h3 className='detailPrecio'>₹ {producto.price}</h3>
                <p className='detailDescripcion'>{producto.description}</p>
                {
                  !agregado ?
                    <ItemCount stock={producto.stock} onAdd= {onAdd} /> 
                    :
                    <div className='continuarContainer'>
                      <div className='botonBolsa'>
                        <Link to= {`/bolsa`}>Ver bolsa</Link>
                      </div>
                      <div className='botonSeguir'>
                        <Link to= {`/productos`}>Seguir comprando</Link>
                      </div>
                    </div>
                }
                <p>En stock: {producto.stock} </p>
                <CreditCards />
            </div>
        </div>
        <div className='fondoBordo'>
          <CarouselProductos />
        </div>
      </>
      :

      <div className='messageContainer'>
        <h2 className='mensaje'>Lo sentimos, no encontramos el productos que buscas</h2>
      </div>
    )
}
