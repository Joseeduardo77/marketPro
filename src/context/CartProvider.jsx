import { useState } from 'react';
import CartContext from './CartContext';

export const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarItem = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  const removerItem = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter(item => item.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CartContext.Provider value={{ carrinho, adicionarItem, removerItem, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};