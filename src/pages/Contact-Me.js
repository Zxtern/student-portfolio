import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


function ContactMe() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-text">
          <h1>Contact Me</h1>

          <p>
            Click the icons below to reach out to me via email or LinkedIn. I look forward to connecting with you!
          </p>

          <div className="contact-icons">
            <a
              href="mailto:romanjael1@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/jael-roman-131b2b212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;