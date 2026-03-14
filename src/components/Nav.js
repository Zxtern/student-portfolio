import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <img src="/logo-3.jpg" alt="CSUMB Logo" width="500" height="200"></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                </ul>
            </nav>

        </div>

    );
}

export default Nav;
