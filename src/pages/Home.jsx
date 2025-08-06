import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-banner">
        <h1>Bem-vindo à MarketPro</h1>
        <p>Seu marketplace de tecnologia com os melhores produtos e preços!</p>
        <a href="/produtos" className="btn">Ver Produtos</a>
      </div>

      <div className="home-highlights">
        <h2>Por que escolher a MarketPro?</h2>
        <div className="features">
          <div className="feature">
            <h3>Frete Rápido</h3>
            <p>Entrega em até 2 dias úteis para todo o Brasil.</p>
          </div>
          <div className="feature">
            <h3>Pagamento Seguro</h3>
            <p>Parcele em até 12x no cartão com total segurança.</p>
          </div>
          <div className="feature">
            <h3>Suporte Especializado</h3>
            <p>Atendimento humanizado e suporte técnico de verdade.</p>
          </div>
        </div>
      </div>

      <div className="home-about">
        <h2>Sobre Nós</h2>
        <p>
          A MarketPro nasceu para oferecer produtos de tecnologia com qualidade, confiança e preço justo. 
          Somos apaixonados por inovação e trabalhamos para oferecer a melhor experiência de compra online.
        </p>
      </div>
    </section>
  );
}

export default Home;