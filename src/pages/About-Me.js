import React from "react";

//This is the About component, which serves as the "About Me" page for the student portfolio. 
// It includes a biography of the student, a self-portrait image, and a welcome message.
// The component is styled using CSS classes defined in the App.css file.

function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-title">
                <h2>Student Portfolio</h2>
                <h1>About Me</h1>
            </div> 
            <div className="about-bio">
                <p>
                    Hello fellow students, instructors, and visitors. My name is Jael Roman and I am a junior enrolled at California State University of Monterey Bay.
                    I am an aspiring software engineer and currently pursuing a Bachelors in Computer Science. 
                </p>

            </div>

        </div>
    );
}

export default AboutMe;