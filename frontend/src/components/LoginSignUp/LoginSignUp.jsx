import React, { useState } from 'react';
import './LoginSignUp.css';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Define fixed credentials for both admin and user
    const adminCredentials = {
      email: 'admin@gmail.com',
      password: 'admin'
    };

    const userCredentials = {
      email: 'user@gmail.com',
      password: 'user'
    };

    if (isSignUp) {
      if (!fullName) {
        setError('Full Name is required');
        return;
      }
      if (!email) {
        setError('Email is required');
        return;
      }
      if (!password) {
        setError('Password is required');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // Simulate successful signup
      alert('Sign up successful');
      navigate("/", { replace: true });
    } else {
      if (isAdmin) {
        if (email === adminCredentials.email && password === adminCredentials.password) {
          // Simulate successful login for admin
          alert('Admin login successful');
          navigate("/admin", { replace: true }); // Redirect to admin page
        } else {
          setError('Invalid admin credentials');
        }
      } else {
        if (email === userCredentials.email && password === userCredentials.password) {
          // Simulate successful login for user
          alert('User login successful');
          navigate("/", { replace: true }); // Redirect to home page
        } else {
          setError('Invalid user credentials');
        }
      }
    }
  };

  return (
    <div className="loginSignUpSection">
      <div className="container">
        <div className="roleToggle">
          <button
            onClick={() => setIsAdmin(false)}
            className={`roleButton ${!isAdmin ? 'active' : ''}`}
          >
            User
          </button>
          <button
            onClick={() => setIsAdmin(true)}
            className={`roleButton ${isAdmin ? 'active' : ''}`}
          >
            Admin
          </button>
        </div>
        <h2>{isSignUp ? 'Sign Up' : 'Login'} as {isAdmin ? 'Admin' : 'User'}</h2>
        {error && <p className="error">{error}</p>}
        <form className="loginSignUpForm" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="formGroup">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}
          <div className="formGroup">
            <label>Email</label>
            <input
              type={isAdmin ? 'text' : 'email'}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isSignUp && (
            <div className="formGroup">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          <button type="submit" className="loginSignUpButton">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <button onClick={toggleSignUp} className="toggleButton">
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignUp;
