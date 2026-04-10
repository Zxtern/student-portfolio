import React from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
    const navigate = useNavigate();
    return (
        <div className="courses-container">
            <div className="courses-title">
                <h1>Courses</h1>
            </div>
            <div className="cst349-container">
                <div className="content1-container">
                    <h1>CST349 Computer Science Proseminar</h1>
                    <h2>Professor Eric Tao</h2>
                    <p>Course outcomes for CST349 are to develop online skills, set education and career goals,
                        develop and ILP, engage with students online, understand portfolio and capstone process, and finally demonstrate
                        professional demonstration skills.
                    </p>
                    <h2>Industry Expert Interview Report </h2>
                    <p>
                        My Expert Interviewee was Oscar Torres Maradiaga. The industry expert blog and video interview can be found <a href="https://jaelcsonline.blogspot.com/2025/09/week-4.html" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                    <h2>Final Research Video Projects </h2>
                    <p>
                        My team and I developed two videos for our final presentation.
                    </p>
                </div>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/OdkkDc02Ktk"
                        title="Autonomous Weapons and the Ethics of AI"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jWQoO-hBeQc"
                        title="Ethics of Autonomous Weapons (Short Version)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                </div>
            </div>

            <div className="cst300-container">
                <div className="content1-container">
                    <h1>CST300 Graduation Writing Assesment for Computing and Design</h1>
                    <h2>Professors Chris Beem & Brian Robertson</h2>
                    <p>Course outcomes for CST300 are to equip students with writing, research, and critical-thinking skills within
                        the fields of computing and design
                    </p>
                    <h2>Ethics Final Essay </h2>
                    <p>
                        My final essay ethics paper can be found <a href="https://docs.google.com/document/d/e/2PACX-1vSZUdx34-rGkrZscX4q7xd_D6AT_bHZpmayxuSL8Ki8FzIVI6v6ifq-SNrHrKCmIFD-pWX5dMgn1gkA/pub" target="_blank" rel="noopener noreferrer">here</a>
                    </p>
                </div>
            </div>

            <div className="cst338-container">
                <div className="content1-container">
                    <h1>CST338 Software Design</h1>
                    <h2>Professor Drew Clinkenbeard </h2>
                    <p>This course focused on developing large-scale software systems using object-oriented programming principles.
                        I gained experience with the software development lifecycle, including requirements analysis and structured design,
                        as well as building graphical user interfaces. Throughout the course, I used tools such as IntelliJ IDEA, Android Studio,
                        and GitHub to design, develop, test applications, manage code and collaborate with groupmates, strengthening my ability
                        to create organized, maintainable, and user-focused software.
                    </p>
                    <h2>Hamster App Final Project</h2>
                    <p>Developed a mobile hamster companion application using Java and Android Studio. Click "Learn More" to view the project details.</p>
                </div>
                <button onClick={() => navigate("/projects")}>Learn More</button>
            </div>

            <div className="cst363-container">
                <div className="content1-container">
                    <h1>CST363 Intro to Database Systems</h1>
                    <h2>Professor Avner Biblarz</h2>
                    <p>This course provided a strong foundation in database systems, with a focus on designing relational schemas,
                        writing SQL queries, and integrating databases into applications. I gained an understanding of database
                        administration as well as the algorithms and data structures behind the query processing and transactions.
                        Additionally, I was introduced to disctributed databases and NoSQL systems, expanding my ability to work 
                        with scalable, data-driven technologies in real-word applications.
                    </p>
                    <h2>Flight Information Display System</h2>
                    <p>Developed a flight information display system using Java and Android Studio. Click "Learn More" to view the project details.</p>
                </div>
                <button onClick={() => navigate("/projects")}>Learn More</button>
            </div>
            <div className="cst334-container">
                <div className="content1-container">
                    <h1>CST334 Operating Systems</h1>
                    <h2>Professor Sam Ogden</h2>
                    <p>This course provided a comprehensive introduction to operating systems, with a focus on both practical use and system design using Linux. I gained hands-on experience navigating the file system,
                        writing shell scripts, and using GNU utilities such as awk and make to build an manage programs. Additionally, I developed an understanding of core operating system concepts, 
                        including process management, multitasking, and the design challenges involved in running multiple applications efficiently on modern computer systems.
                    </p>
                    <h2>Final Research Group Project</h2>
                    <p>Content coming soon</p>
                </div>
            </div>
        </div>
    );
}

export default Courses;