import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { CartProvider } from './hooks/useCart';
import { Confirmation } from './pages/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='carrinho' element={<Cart />} />
          <Route path='purchase' element={<Confirmation />} />
        </Routes>   
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
