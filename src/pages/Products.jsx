import React, { useContext } from 'react';
import '../styles/products.css';
import CartContext from '../context/CartContext';

import camisetaImg from '../assets/camiseta-branca.jpg';
import calcaImg from '../assets/calca-jeans.jpg';
import tenisImg from '../assets/tenis-esportivo.jpg';

const products = [
  {
    id: 1,
    nome: 'Camiseta Branca',
    preco: 'R$ 39,90',
    imagem: camisetaImg,
    descricao: 'Camiseta básica 100% algodão. Ideal para o dia a dia.',
  },
  {
    id: 2,
    nome: 'Calça Jeans',
    preco: 'R$ 89,90',
    imagem: calcaImg,
    descricao: 'Calça jeans azul escura, confortável e moderna.',
  },
  {
    id: 3,
    nome: 'Tênis Esportivo',
    preco: 'R$ 149,90',
    imagem: tenisImg,
    descricao: 'Tênis leve e resistente para corrida ou uso casual.',
  },
];

const Products = () => {
  const { adicionarItem } = useContext(CartContext);

  return (
    <div className="products-page">
      <h1>Produtos</h1>
      <div className="products-container">
        {products.map((produto) => (
          <div key={produto.id} className="product-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <span className="price">{produto.preco}</span>
            <button onClick={() => adicionarItem(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;