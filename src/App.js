import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Courses from './Courses.js';
import AboutMe from './About-Me.js';


// The App component serves as the main entry point for the application. 
// It sets up the routing using React Router and defines the structure of the app,
// including the navigation and the different routes for Home, About, and Courses pages.

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
       
    </div>
    </Router>
  );
}

export default App;
