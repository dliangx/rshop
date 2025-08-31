import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里模拟登录，实际应用中需要连接后端API
    login({
      id: 1,
      email: formData.email,
      name: formData.email.split('@')[0],
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.email}`
    });
    navigate('/about');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="电子邮箱"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="密码"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">登录</button>
        </form>
        <div className="auth-footer">
          <button 
            onClick={() => navigate('/register')}
            className="text-button"
          >
            还没有账号？立即注册
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
