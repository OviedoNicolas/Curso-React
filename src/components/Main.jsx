import React from 'react'
import { Hero } from './Hero'
import { ItemListContainer } from './ItemListContainer'

export const Main = () => {
    return (
        <main>
            {/* <ItemListContainer greeting = {'Todavia no hay productos, estamos trabajando en ello.'} /> */}
            <Hero />
        </main>
    )
}
