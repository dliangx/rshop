import React from "react";
import { useCart } from "../hooks/useCart";

const Products = () => {
  const { addToCart, isInCart } = useCart();

  const products = [
    { id: 1, name: "React课程", price: 99, description: "学习React开发" },
    { id: 2, name: "JavaScript指南", price: 79, description: "精通JavaScript" },
    { id: 3, name: "CSS大师班", price: 89, description: "掌握现代CSS" },
    { id: 5, name: "React课程", price: 99, description: "学习React开发" },
    { id: 6, name: "JavaScript指南", price: 79, description: "精通JavaScript" },
    { id: 7, name: "CSS大师班", price: 89, description: "掌握现代CSS" },
  ];

  return (
    <div className="page">
      <div className="page-title">我们的产品</div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={isInCart(product.id)}
              style={{
                backgroundColor: isInCart(product.id)
                  ? "var(--text-secondary)"
                  : "var(--primary-color)",
                cursor: isInCart(product.id) ? "not-allowed" : "pointer",
                opacity: isInCart(product.id) ? 0.8 : 1,
              }}
            >
              {isInCart(product.id) ? "已在购物车" : "加入购物车"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
