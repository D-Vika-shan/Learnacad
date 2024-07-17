import React, { useState } from 'react';
import { signInWithGoogle } from './firebase'; // Adjust the path as needed
import './Login2.css'; // Make sure to import the CSS file

const Login2 = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user); // Verify user data in console
        setLoggedIn(true); // Update state after successful login
      })
      .catch((error) => {
        console.error(error); // Handle authentication errors
      });
  };

  console.log('loggedIn state:', loggedIn); // Log state for debugging

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="animation-container">
          <lottie-player
            src="https://lottie.host/b8a8a907-85f3-4985-ae03-a32804568564/DMNZITzEY6.json"
            background="#FFFFFF"
            speed="1"
            style={{ width: '300px', height: '300px', margin: 'auto' }}
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
          <h2>Login</h2>
          <button onClick={handleLogin}>Sign in with Google</button>
        </div>
      ) : (
        <div className="success-container">
          <lottie-player
            src="https://lottie.host/a62bae53-aab0-40d5-aa5a-3f576f317f42/cp1oGr9O4i.json"
            background="#FFFFFF"
            speed="1"
            style={{ width: '300px', height: '300px', margin: 'auto' }}
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
          <h2>Successfully Logged In!</h2>
        </div>
      )}
    </div>
  );
};

export default Login2;
