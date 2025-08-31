import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

/**
 * 自定义Hook用于访问购物车功能
 * @returns {Object} 包含购物车状态和方法的对象
 */
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart必须在CartProvider组件内使用');
  }
  
  return context;
};

export default useCart;