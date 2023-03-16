import React from 'react'
import { Brands } from './Brands'
import { Hero } from './Hero'
import { Gallery } from '../landing/Gallery'
import { CarouselProductos } from '../carousel/CarouselProductos'

export const Landing = () => {
  return (
    <>
        <Hero />
        <CarouselProductos />
        <Gallery />
        <div className='fondoBordo'>
        <CarouselProductos />
        </div>
        <Brands />
    </>
  )
}
