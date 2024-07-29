import React, { useEffect, useState } from 'react';
import Signup from '../Pages/SignUp';
import './Login.css';

function Login({ closeLogin }) {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    mobile: ''
  });

  useEffect(() => {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.classList.add('login-open');

    return () => {
      loginContainer.classList.remove('login-open');
    };
  }, []);

  const handleSignUpClick = () => {
    console.log('Sign Up clicked');
    setIsSignupOpen(true);
  };

  const closeSignup = () => {
    console.log('Closing Signup');
    setIsSignupOpen(false);
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3201/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const responseText = await response.text();
      console.log('Response text:', responseText);
  
      if (response.ok) {
        alert('Login successful');
        closeLogin();
      } else {
        try {
          const errorData = JSON.parse(responseText);
          alert(`Error: ${errorData.error}`);
        } catch (parseError) {
          alert('Error: Failed to parse server response');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };
  

  return (
    <>
      <div className="login-container">
        <span className="login-close-btn" onClick={closeLogin}>&times;</span>
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">
            Username:
            <input className="login-input" type="text" name="username" value={loginData.username} onChange={handleChange} />
          </label>
          <label className="login-label">
            Mobile Number:
            <input className="login-input" type="text" name="mobile" value={loginData.mobile} onChange={handleChange} />
          </label>
          <button className="login-button" type="submit">Submit</button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <span className="signup-link" onClick={handleSignUpClick}>Sign Up</span>
        </p>
      </div>
      {isSignupOpen && <Signup closeSignup={closeSignup} style={{ display: 'block', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }} />}
    </>
  );
}

export default Login;