import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/products.css';

const ProductCard = ({ produto }) => {
  const { adicionarItem } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.preco}</p>
      <button onClick={() => adicionarItem(produto)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;