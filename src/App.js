import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Notes from './Notes';
import Competitions from './Competitions'; // Import the Competitions component
import Qpapers from './Qpapers'; // Import the Qpapers component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="logo-link">
            <img src='./images/logo.jpg' alt="logo" height="50" width="50" className="logo-img" />
            <h1>LearnAcad</h1>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/qpapers">Qpapers</Link> {/* Add Qpapers link */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/qpapers" element={<Qpapers />} /> {/* Add Qpapers route */}
          </Routes>
        </main>
        <footer>
          {/* Your footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
