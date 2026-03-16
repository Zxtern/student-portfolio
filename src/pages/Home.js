import React from 'react';
import About from './About.js';
import Courses from './Courses.js';
import AboutMe from './About-Me.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
function Home() {
    return (
        <>
           <About />
           <AboutMe />
           <Courses />
           <Projects />
           <Skills />
        </>
    );
}

export default Home;