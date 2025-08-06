import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">MarketPro</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;