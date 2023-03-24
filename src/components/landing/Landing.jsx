import React from 'react'
import { Brands } from './Brands'
import { Hero } from './Hero'
import { Gallery } from '../landing/Gallery'
import { CarouselProductos } from '../carousel/CarouselProductos'
import { Comments } from '../landing/Comments'

export const Landing = () => {
  return (
    <>
        <Hero />
        <CarouselProductos extra={'nuevo'} />
        <Gallery principal={true} />
        <div className='fondoBordo'>
          <CarouselProductos extra={'best-seller'}/>
        </div>
        <Comments/>
        <Gallery />
        <Brands />
    </>
  )
}
