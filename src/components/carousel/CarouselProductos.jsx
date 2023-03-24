import React, { useState, useEffect } from 'react'
import { Item } from '../item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



export const CarouselProductos = ({extra, productoCargado}) => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState()

  useEffect(() => {

    const dataBase = getFirestore()
    const dbCollection = collection(dataBase, 'items')
    // Con los elementos traidos desde firebase se va a analizar si tienen el campo extra para aramar un carousel, que dependiendo el valor del campo traera los productos "mas vendidos" o "nuevos"
    if(extra){
      const productosFiltrados = query(dbCollection, where('extra', '==', extra))
      getDocs (productosFiltrados)
      .then(res => setProductos(res.docs.map (item => ({id : item.id, ...item.data()}))))
    }else {
      //en la siguiente respuesta se arma un array con 8 elementos traidos de firebase de manera aleatoria, y se evita el producto que ya este cargado
      let productosRandom = []
      getDocs(dbCollection)
      .then (res => {productosRandom = res.docs.map (item => ({id : item.id, ...item.data()}))
      productosRandom = productosRandom.filter (producto => producto.id !== productoCargado.id)
      productosRandom = productosRandom.sort(() => {return Math.random() > 0.5 ? 1 : -1 })
      productosRandom = productosRandom.slice(0, 8)
      setProductos(productosRandom)
      })
    }

    if (extra === 'nuevo'){
      setTitulo('Nuevos ingresos')
    } else if (extra === 'best-seller') {
      setTitulo('Nuestros más vendidos')
    }else{
      setTitulo('Tambien podrian interesarte')
    }
    
  }, [extra])
  
// las siguientes lineas establecen los settings del carousel armado con slick-carousel
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
}

  return (
      <div className='carouselContainer'>
        <div className='carousel'>
          <h3 className='carouselTitulo'>{titulo}</h3>
          <Slider {...settings} >
                {productos.map (producto => (
                  <div key={producto.id}>
                    <Item id = {producto.id} name = {producto.title} price = {producto.price} img = {producto.imgUrl} />
                  </div>
        ))} 
          </Slider>
        </div>
      </div>
  )
}
