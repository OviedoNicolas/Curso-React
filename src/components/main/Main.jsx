import React from 'react'
import { ItemDetail } from '../item/ItemDetail'
import { ItemListContainer } from '../item/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../landing/Landing';

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route exact path='/' element = {<Landing />} />
                <Route exact path ='/producto/:productoId' element={<ItemDetail />} />
                <Route exact path ='/productos' element={<ItemListContainer />} />
                <Route exact path ='/productos/:categoria' element={<ItemListContainer />} />
                <Route exact path ='/productos/:categoria/:subcategoria' element={<ItemListContainer />} />
            </Routes>
        </main>
    )
}
