// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="app">
          <Navbar></Navbar>
          <main>
            <Routes>
                  <Route path="/" element={<Projects />} />
                  <Route path="/about-me" element={<AboutMe />} />
                  <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Jordan Pettyjohn</p>
          </footer>
        </div>
    </Router>
  );
}

export default App;
