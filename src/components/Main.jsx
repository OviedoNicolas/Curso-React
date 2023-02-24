import React from 'react'
import { Hero } from './Hero'
import { ItemDetail } from './ItemDetail'
import { ItemListContainer } from './ItemListContainer'
import { Marcas } from './Marcas'

export const Main = () => {
    return (
        <main>
            {/* <ItemListContainer greeting = {'Todavia no hay productos, estamos trabajando en ello.'} /> */}
            {/* <Hero /> */}
            <ItemDetail />
            <Marcas />
        </main>
    )
}
