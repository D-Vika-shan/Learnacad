import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to check if the user exists in local storage
  const checkUserInLocalStorage = (email, password) => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      return true; // User found and authenticated
    } else {
      return false; // User not found or authentication failed
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    // Check if user exists in local storage
    const { email, password } = formData;
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      console.log('Login successful');
      setError('');
      setLoggedIn(true); // Set loggedIn state to true
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const signup = () => {
    // For demo purposes, simply logging the signed up user data and saving to localStorage
    console.log('Signing up with:', formData.username, formData.email, formData.password);
    
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    
    // Reset form data and switch to login state after signup
    setFormData({
      username: '',
      email: '',
      password: ''
    });
    setState('Login');
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        {loggedIn ? (
          <div>
            <p>You are logged in.</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK3hf9kn0o4wSBzq7j2FvUpPgzZOjL58O7A&s' />
            <Link to="/">Go to Home</Link>
          </div>
        ) : (
          <>
            <div className="loginsignup-fields">
              {state === 'Sign Up' && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />}
              <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
              <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
            </div>
            <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
            {error && <p className="error-message">{error}</p>}
            {state === 'Sign Up'
              ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>
              : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>}
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id='' />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
