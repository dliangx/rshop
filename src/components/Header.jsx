import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return '首页';
      case '/products':
        return '商品列表';
      case '/cart':
        return '购物车';
      case '/about':
        return '个人中心';
      case '/login':
        return '登录';
      case '/register':
        return '注册';
      default:
        return '';
    }
  };

  return (
    <header className="page-header">
      <h1>{getTitle()}</h1>
    </header>
  );
};

export default Header;
