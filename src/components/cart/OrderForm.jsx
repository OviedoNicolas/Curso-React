import React, { useState, useContext } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext'


export const OrderForm = () => {

  const {carrito, total, vaciarCarrito } = useContext(CartContext)
  const [clienteNombre, setClienteNombre] = useState('')
  const [clienteTelefono, setClienteTelefono] = useState('')
  const [clienteEmail, setClienteEmail] = useState('')
  const [compraRealizada, setCompraRealizada] = useState(false)
  const [ordenId, setOrdenId] = useState('')
  const dataBase = getFirestore();
  const ordenes = collection(dataBase, 'orders');


  const enviarCompra = (e) => {
    e.preventDefault();
    const orden = {
        buyer: {
          name: clienteNombre,
          phone: clienteTelefono,
          email: clienteEmail
        },
        items: carrito,
        total: total()
      };

      addDoc(ordenes, orden)
      .then((docRef) => {
        setCompraRealizada(true)
        setOrdenId(docRef.id)
        setTimeout(() => {
          vaciarCarrito()
        }, 7000);
      })
    }

  return (
    compraRealizada ?
    <div className='ordenMensaje'>
      <p>Muchas gracias por su compra!!!</p>
      <p>Puede seguir su compra con el siguiente número: <br/><span>{ordenId}</span></p>
    </div>
    :

    <div className='ordenFormContainer'>
      <form className='ordenForm' onSubmit={enviarCompra}>
        <label>
          Nombre:<br/>
          <input type="text" value={clienteNombre} onChange={(e) => setClienteNombre(e.target.value)} />
        </label>
        <label>
          Teléfono:<br/>
          <input type="text" value={clienteTelefono} onChange={(e) => setClienteTelefono(e.target.value)} />
        </label>
        <label>
          Email:<br/>
          <input type="email" value={clienteEmail} onChange={(e) => setClienteEmail(e.target.value)} />
        </label>
        <button className='ordenBoton' type="submit">Realizar compra</button>
      </form>
    </div>
  )
}
