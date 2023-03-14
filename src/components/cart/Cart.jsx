import React from 'react'
import { Item } from '../item/Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProductos } from '../carousel/CarouselProductos';
import { Loader } from '../loader/Loader';


export const Cart = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    }
  };

  
  return (
    <>
      <CarouselProductos />
      <Loader />
    </>
  )
}
