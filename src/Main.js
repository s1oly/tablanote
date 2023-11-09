// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Compositions from './Compositions';

function Main() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home (App)</Link>
            </li>
            <li>
              <Link to="/compositions">Compositions</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/compositions" element={<Compositions />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
