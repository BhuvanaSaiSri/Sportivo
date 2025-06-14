import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Our Website!</h1>
      <p className="welcome-message">We're glad you're here. Please login or register to continue.</p>
      
      <div className="welcome-buttons">
        <Link to="/login" className="welcome-btn">Login</Link>
        <Link to="/register" className="welcome-btn">Register</Link>
      </div>
    </div>
  );
};

export default Welcome;

