import React from "react";

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="project-one-text">
                <h2>Hamster Companion App - Software Design Final Project</h2>
                <p>As part of a team-based software design project, we developed a mobile hamster companion application using Java and Android Studio. The app allows users to create an 
                    account, adopt a virtual hamster, and interact with it through actions such as feeding, cleaning, and playing. These interactions dynamically update the hamster's key
                    attributes such as hunger, cleanliness and energy while maintaining a log of past activities with timestamps.
                </p>
                <p>I was primarily responsible for the user interface and user experience design, creating detailed layouts and prototypes using Figma. I designed multiple core screens,
                     including the sign-in and sign-up pages, welcome screen, hamster home page, care log, adoption center, and admin interface. In addition, I served as the team lead
                     for version control, managing the main branch on GitHub. I reviewed teammates' code, resolved merge conflicts, and ensured stable integration of features. This project
                     strengthened my skills in UI/UX design, mobile development, and collaborative software engineering.
                </p>
            </div>
            <div className="project-two-text">
                <h2>Flight Information Display System - Database Systems Final Project</h2>
                <p>As part of a team-based final database project, my groupmates and I designed and implemented a Flight Information Display System database using pgAdmin4 and SQL
                    to model and manage real-world airport flight data, The system standardizes flight statuses and separates scheduled, estimated, and actual times to improve data consistency,
                    while using UTC storage with dynamic timezone conversion to support accurate, location-aware displays.
                </p>
                <p>We developed a scalable relational schema capturing complex relationships such as airline-to-flight, flight-to-gate-to-terminal, and passenger itineraries,
                    enabling efficient querying for departures, arrivals, and airline-specific views. This project demonstrates strong skills in relational database design 
                    data modeling, and SQL, as well as the ability to build structured, real-world data systems collaboratively.
                </p>
            </div>
            <div className="project-three-text">
                {/*<h2>Final Project Placeholder</h2>
                <p>Final project description here.</p>*/}
            </div>
        </div>
    );
}

export default Projects;