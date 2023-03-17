import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'
import { Item } from './Item'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { Loader } from '../loader/Loader'


export const ItemListContainer = () => {

    const { categoria, subcategoria } = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

      const dataBase = getFirestore()
      const dbCollection = collection(dataBase, 'items')

        if (subcategoria){
          const productosSubCategoria = query(dbCollection, where('subcategory', '==', subcategoria ))
          getDocs (productosSubCategoria)
            .then(res => {if (res.docs.length) {
              setProductos (res.docs.map (item => ({id: item.id, ...item.data()})))
              setLoading(false)
            }else {
              setProductos()
              setLoading(false)
            }})
        }else if (categoria){
          const productosPorCategoria = query(dbCollection, where('category', '==', categoria ))
          getDocs (productosPorCategoria)
            .then (res => {if (res.docs.length){
              setProductos (res.docs.map (item => ({id: item.id, ...item.data()})))
              setLoading(false)
            }else {
              setProductos()
              setLoading(false)
            }}) 
        } else{
          getDocs (dbCollection)
          .then (res => {if (res.docs.length){
            setProductos (res.docs.map (item => ({id: item.id, ...item.data()})))
            setLoading(false)
          }})
        }
    }, [categoria, subcategoria])

    return (
      loading ? 
      <Loader loading={loading} />
      :
        productos ?
        <div className='itemList'>
            {productos.map (producto => (
                <Item key={producto.id} id = {producto.id} name = {producto.title} price = {producto.price} img = {producto.imgUrl} />
            ))}
        </div>
            :

        <div className='messageContainer'>
          <h2 className='mensaje'>Lo sentimos, no hay coincidencia</h2>
        </div>
    )
}
