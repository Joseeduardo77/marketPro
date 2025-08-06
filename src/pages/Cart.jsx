import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import CartContext from "../context/CartContext";

function Cart() {
  const { carrinho, removerItem, limparCarrinho } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotal = () => {
    return carrinho.reduce((total, item) => total + (item.preco ? parseFloat(item.preco.replace('R$', '').replace(',', '.')) : 0), 0).toFixed(2);
  };

  const finalizarPedido = () => {
    limparCarrinho();
    navigate("/sucesso");
  };

  return (
    <section className="cart">
      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-items">
            {carrinho.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{item.preco}</p>
                  <button onClick={() => removerItem(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: R$ {getTotal()}</h3>
          <button className="finalizar-btn" onClick={finalizarPedido}>
            Finalizar Pedido
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;