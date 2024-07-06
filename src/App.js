import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import './App.css';

// Import your image
import logo from './images/logo.jpg';

function App() {
  

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Use the imported image */}
          <img src={logo} alt="logo" height="50" width="50" className="logo-img" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          
        </header>
        <div className="welcome" style={{ fontSize: '30px', fontWeight: 'bold' }}>Welcome!</div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 My EdTech App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
