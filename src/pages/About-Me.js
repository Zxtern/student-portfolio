import React from "react";
import Skills from "./Skills";
import Resume from "./Resume";

//This is the About component, which serves as the "About Me" page for the student portfolio. 
// It includes a biography of the student, a self-portrait image, and a welcome message.
// The component is styled using CSS classes defined in the App.css file.

function AboutMe() {
    return (
        <>
            <div className="about-me-container">
                <div className="about-me-title">
                    <h1>Student Portfolio</h1>
                    <h2>About Me</h2>
                </div> 
                <div className="about-me-content">
                    <div className="about-bio">
                        <p>
                            Hello fellow students, instructors and visitors. My name is Jael Roman, and I currently attend California State University, Monterey Bay.
                            I am a junior pursuing a Bachelor's degree in Computer Science with a strong interest in software development and building intuitive applications.
                            I enjoy designing, developing, and deploying ideas into interactive experiences using modern technologies.
                        </p>
                        <p>
                            I chose to study Computer Science because I enjoy solving problems and understanding how complex systems work.
                            Programming allows me to combine logical thinking with creativity to build tools that people can use every day.
                            My goal is to become a skilled software engineer where I can contribute to meaningful projects and make a positive impact throughout my career.
                            This is only the beginning of my journey in the world of technology.
                        </p>
                        <p>
                            I am always excited to learn, collaborate, and contribute to projects that challenge me to grow as a developer and make an impact in the tech industry.
                            Thank you for taking the time to explore my portfolio and learn more about me. I look forward to connecting with you and sharing my work as I continue to grow in my career.
                        </p>
                    </div>
                <div className="about-me-img">
                    <img src="/Professional copy.png" alt="professional self portrait" width="400" height="600"></img>
                </div>
            </div>
                
            </div>

            <Skills />
            <Resume />
        </>
    );
}

export default AboutMe;