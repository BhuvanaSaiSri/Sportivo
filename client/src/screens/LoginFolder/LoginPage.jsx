
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
// import {img} from "../assets/images"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual login logic
    navigate('/welcome'); // Ensure this route exists
  };

  return (
    <div className="login-main-container">
      <div className="login-left">
        <div className="login-form-container">
                            <h2 className="login-title">Login</h2>

        <form className= "login-form"onSubmit={handleSubmit} >
             
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">Login</button>

          <div className="login-register-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </div>
        </form>
        </div>
      </div>

      <div className="login-right">
        <img src="/img.jpg"/>
      </div>
    </div>
  );
};

export default LoginPage;
