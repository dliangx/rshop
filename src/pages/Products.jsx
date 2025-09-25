import React from "react";
import { useCart } from "../hooks/useCart";

const Products = () => {
  const { addToCart, isInCart } = useCart();

  const products = [
    { id: 1, name: "男士T恤", price: 59, description: "舒适纯棉，百搭男士短袖T恤" },
    { id: 2, name: "女士连衣裙", price: 129, description: "夏季新款，清新优雅连衣裙" },
    { id: 3, name: "牛仔裤", price: 99, description: "经典直筒牛仔裤，男女通用" },
    { id: 4, name: "运动卫衣", price: 149, description: "时尚休闲连帽卫衣，适合运动与日常" },
    { id: 5, name: "男士西装外套", price: 299, description: "商务正装，修身有型" },
    { id: 6, name: "女士针织衫", price: 89, description: "柔软舒适，秋冬必备" },
    { id: 7, name: "休闲短裤", price: 69, description: "透气面料，夏日清凉选择" },
    { id: 8, name: "运动鞋", price: 199, description: "轻便耐磨，适合跑步健身" },
    { id: 9, name: "棒球帽", price: 39, description: "时尚百搭，遮阳防晒" },
    { id: 10, name: "羊毛围巾", price: 79, description: "保暖舒适，冬季必备配饰" },
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
