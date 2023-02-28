import React from 'react'
import { Hero } from './Hero'
import { ItemDetail } from '../item/ItemDetail'
import { ItemListContainer } from '../item/ItemListContainer'
import { Brands } from './Brands'
import {  Routes, Route } from 'react-router-dom';

export const Main = () => {
    return (
        <main>
            {/* <Hero /> */}
            {/* <ItemListContainer /> */}
            <Routes>
                <Route exact path ='/producto/:productoId' element={<ItemDetail />} />
                <Route exact path ='/productos' element={<ItemListContainer />} />
                <Route exact path ='/productos/:categoria' element={<ItemListContainer />} />
                <Route exact path ='/productos/:categoria/:subcategoria' element={<ItemListContainer />} />
            </Routes>
            <Brands />
        </main>
    )
}
