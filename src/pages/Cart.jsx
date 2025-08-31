import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart,
    getCartItemsCount
  } = useCart();

  const handleCheckout = () => {
    // TODO: 实现结算功能
    alert('结算功能开发中...');
  };

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="page-title">购物车</div>
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <p>您的购物车是空的</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-title">
        购物车 ({getCartItemsCount()} 件商品)
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-header">
              <h3 className="cart-item-title">{item.name}</h3>
              <button 
                className="cart-item-remove"
                onClick={() => removeFromCart(item.id)}
              >
                删除
              </button>
            </div>
            
            <p className="cart-item-price">单价: ¥{item.price}</p>
            
            <div className="cart-item-controls">
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity || 1}</span>
                <button 
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-subtotal">
                小计: ¥{(item.price * (item.quantity || 1)).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <div className="cart-total-inner">
          <div className="cart-total-amount">
            合计: <span>¥{getCartTotal().toFixed(2)}</span>
          </div>
          <div className="cart-actions">
            <button 
              className="clear-cart-button"
              onClick={clearCart}
            >
              清空购物车
            </button>
            <button 
              className="checkout-button"
              onClick={handleCheckout}
            >
              去结算
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;