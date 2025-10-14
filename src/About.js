import React from "react";

function About() {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>Welcome to</h2>
                <h1>Jael Roman's Student Portfolio</h1>
                
            </div>
            <img src="/self-icon-1.png" alt="self portrait" width="400" height="600"></img>
            <div className="about-bio">
                <p>
                    Hello fellow students, instructors, and visitors. My name is Jael Roman and I am a junior enrolled at California State University of Monterey Bay.
                    I am an aspiring software engineer and currently pursuing a Bachelors in Computer Science. 
                </p>

            </div>

        </div>
    );
}

export default About;