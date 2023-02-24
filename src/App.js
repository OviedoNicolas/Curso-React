import { Header } from './components/Header';
import { Main } from './components/Main';
import { Item } from './components/Item';
import fotoEjemplo from './img/armas/master.png'

// Este producto es para ejemplos, tento este como la imagen despues se deben borrar
const producto = {
    nombre: 'Espada Maestra',
    img: fotoEjemplo,
    precio: 500
  }


function App() {
    return (
        <>
            <Header />
            <Main /> 
            <Item titulo={producto.nombre} precio={producto.precio} foto={producto.img} />
        </>
    )
}

export default App;
