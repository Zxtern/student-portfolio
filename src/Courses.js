import React from "react";

function Courses() {
    return (
        <div className="courses-container">
            <div className="courses-title">
                <h2>Student Portfolio</h2>
                <h1>Courses</h1>
            </div>
            <div className="cst349-container">
                <h1>CST349 Computer Science Proseminar</h1>
                <h2>Dr. Eric Tao</h2>
                <p>Course outcomes for CST349 are to develop online skills, set education and career goals,
                    develop and ILP, engage with students online, understand portfolio and capstone process, and finally demonstrate
                    professional demonstration skills.
                </p>
                <h2>Industry Expert Interview Report </h2>
                <p>
                    My Expert Interviewee was Oscar Torres Maradiaga. The industry expert video interview can be found at: https://jaelcsonline.blogspot.com/2025/09/week-4.html
                </p>
                <h2>Final Research Video Project </h2>
                <p>
                    My team and I developed two videos for our final presentation. The links are:
                </p>
                <p>https://www.youtube.com/watch?v=OdkkDc02Ktk</p>
                <p>https://youtu.be/jWQoO-hBeQc</p>
            </div>

            <div className="cst300-container">
                <h1>CST300 Graduation Writing Assesment for Computing and Design</h1>
                <h2>Professors Chris Beem & Brian Robertson</h2>
                <p>Course outcomes for CST300 are to equip students with writing, research, and critical-thinking skills within
                    the fields of computing and design
                </p>
                <h2>Ethics Final Essay </h2>
                <p>
                    My final essay ethics paper can be found at:
                     https://docs.google.com/document/d/e/2PACX-1vSZUdx34-rGkrZscX4q7xd_D6AT_bHZpmayxuSL8Ki8FzIVI6v6ifq-SNrHrKCmIFD-pWX5dMgn1gkA/pub
                </p>
            </div>

            <div className="cst338-container">
                <h1>CST338 Software Design</h1>
            </div>

            <div className="cst363-container">
                <h1>CST363 Intro to Database Systems</h1>
            </div>

        </div>
    );
}

export default Courses;