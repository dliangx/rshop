import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <div className="page-title">欢迎来到我们的SPA</div>
      <p>这是一个使用React构建的单页面应用示例。</p>
      
      <div className="feature-cards">
        <div className="card">
          <h3>快速</h3>
          <p>React应用提供流畅的用户体验</p>
        </div>
        <div className="card">
          <h3>现代</h3>
          <p>使用最新的前端技术栈</p>
        </div>
        <div className="card">
          <h3>响应式</h3>
          <p>在所有设备上完美展示</p>
        </div>
      </div>
    </div>
  );
};

export default Home;