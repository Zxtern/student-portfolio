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
                    <p>For this project, my group and I worked together to write an essay and create a video presentation on a research paper titled "The Case for RAMClouds: Scalable High-Performance Storage Entirely in DRAM" by John Ousterhout.
                        As a team, we analyzed the research paper's key findings and significance. This project helped strengthen our ability to interpret academic research and collaborate effectively.
                        Our collaborative group essay can be found <a href="https://docs.google.com/document/d/1Vq9w2s4zsGBxGElvJs71vV2cX6Nmajz2hF6i2BFm9V8/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> here.</a>
                    </p>
                    <h2> Final Video Presentation </h2>
                    <div className="video-container1">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ImCy_In-_II?si=dbyUY7f4DBI5EC1V"
                            title="RAMClouds: Scalable High-Performance Storage Entirely in DRAM"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="cst311-container">
                <div className="content1-container">
                    <h1>CST311 Introduction to Computer Networks</h1>
                    <h2>Professor Cao Thang Bui</h2>
                    <p>This course provided the fundamentals of computer networking, including LANs, WANs, TCP/IP,
                        internet protocols, network security, and network performance. 
                    </p>
                    <h2>Example Project - Programming Assignment #3</h2>
                    <p>For this assignment, I created and built a real-time application that allows two users to communicate over a network.
                        The project involved creating both the server and client applications, handling multiple user connections,
                        and ensuring messages were delivered in real-time. Through this project, I gained hands-on experience with how
                        computers communicate over a network and exchange information.
                    </p>
                    <h2>Video Presentation - Programming Assignment #3</h2>
                    <div className="video-container1"></div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nFp9Yn5IOqs?si=tVoCo4uyclrj8I8a"
                        title="CST311 Programming Assignment #3"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            <div className="cst336-container">
                <div className="content1-container">
                    <h1>CST336 Internet Programming</h1>
                    <h2>Professor Miguel Lara</h2>
                    <p>In this course, I learned how to build dynamic and responsive web applications by combining front-end and back-end technologies.
                        Developed applications using server-side programming with Express.js, database integration, RESTful APIs, and responsive web design.
                        The course emphasized creating interactive web applications that communicate with databases and external web services.
                    </p>
                    <h2>Final Project - Medication Organizer App</h2>
                    <p>For the final project, my group and I developed Medication Organizer, a full-stack application that helps users manage their medications
                        and daily schedules. In this application, users can manage medication schedules, track doses, and store preferred pharmacy information in one place.
                        Medication Organizer was built with Node.js, Express.js, MySQL, EJS, JavaScript, HTML, and CSS. The project demonstrates full-stack development, database integration, RESTful APIs, and responsive web design.
                    </p>
                </div>
                <button onClick={() => navigate("/projects")}>Learn More</button>
            </div>

            <div className="cst370-container">
                <div className="content1-container">
                    <h1>CST370 Design and Analysis of Algorithms</h1>
                    <h2>Professor Shahidul Islam</h2>
                    <p>Class is in session, content Coming Soon</p>
                </div>
            </div>

            <div className="cst462s-container">
                <div className="content1-container">
                    <h1>CST462s Race, Gender, Class in the Digital World</h1>
                    <p>Content Coming Soon</p>
                </div>
            </div>
            <div className="cst328-container">
                <div className="content1-container">
                    <h1>CST328 Digital Art and Design</h1>
                    <p>Content Coming Soon</p>
                </div>
            </div>

        </div>
    );
}

export default Courses;