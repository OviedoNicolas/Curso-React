import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from '../item/ItemCount'

export const CartItem = ({producto}) => {

    const { borrarDelCarrito, actualizarCantidad } = useContext(CartContext)

    const contadorActualizarCantidad = (cantidad) =>{
        actualizarCantidad ( producto.id , cantidad)
    }

    return (
    <div className='cartItem'>
        <div className='cartItemImg'>
            <img src={producto.imgUrl} alt={producto.name} />
        </div>
        <div className='itemData'>
            <p>{producto.title}</p>
            <p>${producto.price}</p>
        </div>
        <div className='stockContainer'>
            <ItemCount initial={producto.quantity} stock={producto.stock} onCantidad={contadorActualizarCantidad}/>
            <p>En stock: {producto.stock} </p>
        </div>
        <p>${producto.quantity*producto.price}</p>
        <button className='resta' onClick={()=> borrarDelCarrito (producto.id)}>X</button>
    </div>
    )
}