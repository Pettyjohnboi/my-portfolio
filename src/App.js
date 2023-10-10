// src/App.js
import React from 'react';
import Project from './components/Project';
import './App.css';

const projects = [
  {
    title: 'Appointment Setter',
    description: "User's can sign in and make appointments which will then trigger an email or SMS message confirmation depending on their choice",
    github: 'https://github.com/Pettyjohnboi/react-appointment-setter',
    demo: 'https://pettyjohnboi.github.io/react-appointment-setter',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://yourusername.github.io/project2',
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Jordan Pettyjohn's Portfolio</h1>
      </header>
      <main className="app-main">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Jordan Pettyjohn</p>
      </footer>
    </div>
  );
}

export default App;
