import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Courses from './Courses.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
       
    </div>
    </Router>
  );
}

export default App;
