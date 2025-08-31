import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Navbar = () => {
  const { getCartItemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          React SPA
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              关于
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/products" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              产品 <span className="cart-count">({getCartItemsCount()})</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              联系
            </Link>
          </li>
        </ul>

        <div 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;