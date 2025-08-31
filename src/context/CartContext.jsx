import React, { createContext, useState, useEffect } from 'react';

// 创建Context
const CartContext = createContext();

/**
 * 购物车Provider组件
 * @param {Object} props - 组件属性
 * @param {ReactNode} props.children - 子组件
 */
export const CartProvider = ({ children }) => {
  // 从localStorage初始化购物车
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 当购物车变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * 添加商品到购物车
   * @param {Object} product - 商品对象
   */
  const addToCart = (product) => {
    setCart(prevCart => {
      // 检查商品是否已在购物车中
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // 如果已存在，增加数量
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + 1
        };
        return updatedCart;
      } else {
        // 如果不存在，添加新商品
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  /**
   * 从购物车移除商品
   * @param {number} productId - 商品ID
   */
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  /**
   * 更新商品数量
   * @param {number} productId - 商品ID
   * @param {number} quantity - 新数量
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * 清空购物车
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * 计算购物车总价
   * @returns {number} 总价格
   */
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  /**
   * 计算购物车商品总数
   * @returns {number} 商品总数量
   */
  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  /**
   * 检查商品是否在购物车中
   * @param {number} productId - 商品ID
   * @returns {boolean} 是否在购物车中
   */
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };