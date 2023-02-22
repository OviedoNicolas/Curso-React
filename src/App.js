import { Header } from './components/Header';
import { Item } from './components/Item';
import { ItemCount } from './components/ItemCount';
import { ItemDetail } from './components/ItemDetail';
import { Main } from './components/Main';
import fotoEjemplo from './img/master.webp'

// Este producto es para ejemplos, tento este como la imagen despues se deben borrar
const producto = {
    nombre: 'Espada Maestra',
    img: fotoEjemplo,
    precio: 500
  }


function App() {
    return (
        <>
            {/* <Header />
            <Main /> 
            <Item titulo={producto.nombre} precio={producto.precio} foto={producto.img} /> */}
            <ItemDetail />
        </>
    )
}

export default App;
