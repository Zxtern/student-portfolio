import React from "react";

//This is the About component, which serves as the introduction page for the student portfolio. 
// It includes a welcome message, a self-portrait image, and a brief biography of the student. 
// The component is styled using CSS classes defined in the App.css file.

function About() {
    return (
        <div className="about-container">
            <div className="about-content-container">
               <div className="about-text-container">
                    <div className="about-text">
                        <h1>Jael Roman</h1>
                        <h2>Computer Science Student</h2>
                        <h2>Frontend Developer</h2>
                    </div>
                </div>
                <div className="self-img">
                    <img src="/self-icon-1.png" alt="self portrait" width="400" height="600"></img>
                </div>
            </div>
            <button>Enter</button>
        </div>
    );
}

export default About;