import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>MarketPro</h3>
        <p>Seu marketplace de tecnologia e moda com entrega rápida e segura.</p>
        <p>© {new Date().getFullYear()} MarketPro. Todos os direitos reservados.</p>
      </div>

      <div className="footer-links">
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/carrinho">Carrinho</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contato</h4>
        <p>Email: suporte@marketpro.com</p>
        <p>WhatsApp: (11) 99999-9999</p>
        <p>Endereço: Av. das Empresas, 123 - São Paulo/SP</p>
      </div>
    </footer>
  );
};

export default Footer;