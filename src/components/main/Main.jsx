import React from 'react'
import { ItemDetail } from '../item/ItemDetail'
import { ItemListContainer } from '../item/ItemListContainer'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from '../landing/Landing';
import { Cart } from '../cart/Cart';

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route exact path='/' element = {<Landing />} />
                <Route exact path ='/producto/:productoId' element={<ItemDetail />} />
                <Route exact path ='/productos' element={<ItemListContainer />} />
                <Route exact path ='/productos/:categoria' element={<ItemListContainer />} />
                <Route exact path ='/productos/:categoria/:subcategoria' element={<ItemListContainer />} />
                <Route exact path='/bolsa' element = {<Cart />} />
                {/* // En caso que la ruta despues de http://localhost:3000/ no encuente coincidencia, se redirigira a una pagina 404  */}
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </main>
    )
}
