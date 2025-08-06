import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import productsData from './data/products'; 
import Success from './pages/Success';  
import CartContext from './context/CartContext';

function App() {
  const { carrinho, adicionarItem } = useContext(CartContext);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produtos"
            element={<Products products={productsData} carrinho={carrinho} adicionarItem={adicionarItem} />}
          />
          <Route
            path="/carrinho"
            element={<Cart carrinho={carrinho} />}
          />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;