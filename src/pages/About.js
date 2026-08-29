import React from "react";
import { useNavigate } from "react-router-dom";

//This is the About component, which serves as the introduction page for the student portfolio. 
// It includes a welcome message, a self-portrait image, and a brief biography of the student. 
// The component is styled using CSS classes defined in the App.css file.

function About() {
    const navigate = useNavigate(); //for the enter button to navigate to the about me page
    return (
        <div className="about-container">
            <div className="about-content-container">
               <div className="about-text-container">
                    <div className="about-text">
                        <h1>Jael Roman</h1>
                        <h2>Computer Science Student</h2>
                        <h2>Software Developer</h2>
                    </div>
                </div>
                <div className="self-img">
                    <img src="/self-icon-1.png" alt="self portrait" width="400" height="600"></img>
                </div>
            </div>
            <button onClick={() => navigate("/about-me")}>Enter</button>
        </div>
    );
}

export default About;