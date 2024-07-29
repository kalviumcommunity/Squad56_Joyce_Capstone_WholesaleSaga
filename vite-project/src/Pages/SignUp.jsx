import React, { useState } from 'react';
import './SignUp.css';

function Signup({ closeSignup }) {
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('User created successfully');
        closeSignup();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    }
  };

  return (
    <div className="signup-container">
      <span className="signup-close-btn" onClick={closeSignup}>&times;</span>
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">
          Username:
          <input className="signup-input" type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label className="signup-label">
          Mobile Number:
          <input className="signup-input" type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        </label>
        <label className="signup-label">
          Password:
          <input className="signup-input" type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;