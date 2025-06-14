import React, { useState } from 'react';
import './RegistrationPage.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    occupation: '',
    maritalStatus: '',
    sports: '',
    gender: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="register-main-container">
      <div className="register-left">
        <div className="register-form-container">
          <h2 className="register-title">Register</h2>

          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
              className="register-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="register-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="register-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="register-input"
            />

            <select
              name="occupation"
              required
              onChange={handleChange}
              className="register-input"
            >
              <option value="">Select Occupation</option>
              <option value="student">Student</option>
              <option value="employee">Employee</option>
              <option value="others">Others</option>
            </select>

            <div className="register-radio-group">
              <label>Marital Status:</label>
              <label className="register-radio-label">
                Single
                <input type="radio" name="maritalStatus" value="single" onChange={handleChange} />
              </label>
              <label className="register-radio-label">
                Married
                <input type="radio" name="maritalStatus" value="married" onChange={handleChange} />
              </label>
              <label className="register-radio-label">
                Others
                <input type="radio" name="maritalStatus" value="others" onChange={handleChange} />
              </label>
            </div>

            <select
              name="sports"
              required
              onChange={handleChange}
              className="register-input"
            >
              <option value="">Select Favorite Sport</option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="badminton">Badminton</option>
              <option value="tennis">Tennis</option>
              <option value="boxing">Boxing</option>
              <option value="baseball">Baseball</option>
            </select>

            <div className="register-radio-group">
              <label>Gender:</label>
              <label className="register-radio-label">
                Male
                <input type="radio" name="gender" value="male" onChange={handleChange} />
              </label>
              <label className="register-radio-label">
                Female
                <input type="radio" name="gender" value="female" onChange={handleChange} />
              </label>
              <label className="register-radio-label">
                Others
                <input type="radio" name="gender" value="others" onChange={handleChange} />
              </label>
            </div>

            <select
              name="location"
              required
              onChange={handleChange}
              className="register-input"
            >
              <option value="">Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
            </select>

            <button type="submit" className="register-button">Register</button>
            <p className="register-text">
              Already have an account? <Link to="/" className="register-link">Login</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="register-right">
        <img src="/img.jpg" alt="Sportivo" />
      </div>
    </div>
  );
};

export default RegistrationPage;