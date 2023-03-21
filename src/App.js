import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import CartProvider from './components/context/CartContext';

function App() {
    return (
        <CartProvider>
            <>
                <Header />
                <Main /> 
                <Footer />
            </>
        </CartProvider>
    )
}

export default App;
