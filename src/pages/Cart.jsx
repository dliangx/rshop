import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="page-title">购物车</div>
        <p>您的购物车是空的</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-title">购物车</div>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>单价: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>
                -
              </button>
              <span>数量: {item.quantity || 1}</span>
              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                +
              </button>
            </div>
            <p>小计: ${item.price * (item.quantity || 1)}</p>
            <button onClick={() => removeFromCart(item.id)}>
              移除
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>总计: ${getCartTotal()}</h3>
        <button onClick={clearCart}>清空购物车</button>
      </div>
    </div>
  );
};

export default Cart;