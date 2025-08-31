import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const BottomNav = () => {
  const location = useLocation();
  const { getCartItemsCount } = useCart();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>首页</span>
      </Link>
      
      <Link to="/products" className={`bottom-nav-item ${location.pathname === '/products' ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="2"></rect>
          <line x1="2" y1="9" x2="22" y2="9"></line>
        </svg>
        <span>产品</span>
      </Link>
      
      <Link to="/cart" className={`bottom-nav-item ${location.pathname === '/cart' ? 'active' : ''}`}>
        <div className="cart-icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {getCartItemsCount() > 0 && (
            <span className="bottom-cart-badge">{getCartItemsCount()}</span>
          )}
        </div>
        <span>购物车</span>
      </Link>

      <Link to="/about" className={`bottom-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>我的</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
