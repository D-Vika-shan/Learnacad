import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Notes from './Notes';
import Login from './Login';
import Competitions from './Competitions';
import Qpapers from './Qpapers';
import SocialMediaSidebar from './SocialMediaSidebar';
import { auth, logout } from './firebase'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <SocialMediaSidebar />
        <header className="App-header">
          <Link to="/" className="logo-link">
            <img src='./images/logo.png' alt="logo" height="50" width="50" className="logo-img" />
            <h1>LearnAcad</h1>
          </Link>
          <p style={{ fontStyle: 'italic', color: '#bd81e6' }}>SDG-4: Education Technology</p>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/qpapers">Qpapers</Link>
            {user ? (
              <>
                <img src={user.photoURL} height="30px" width="35px" alt="user" onClick={logout} style={{ cursor: 'pointer', borderRadius: '50%' }} />
              </>
            ) : (
              <Link to="/login"><img src="/images/user.png" height="30px" width="35px" alt="log in" /></Link>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/qpapers" element={<Qpapers />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          {<p>&copy; Webzters 2024</p>}
        </footer>
      </div>
    </Router>
  );
}

export default App;
