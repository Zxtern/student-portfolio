import React, { useEffect, useState } from "react";

function Resume() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const resumePath = "/assets/resume/Jael_Roman_ResumeA.pdf"; // Path to the resume PDF file
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };
        if (isModalOpen) {
            document.addEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        }
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
        };
    }, [isModalOpen]);

    return (
        <div className="resume-container">
            <div className="resume-content">
                <div className="resume-title">
                    <h1>Resume</h1>
                </div>
                <div className="resume-text">
                    <h2>Click to view my resume and learn more about my education and experience!</h2>
                </div>

                <div className="resume-preview-container">
                <div
                    className="resume-preview-card"
                    onClick={openModal}
                    role="button"
                    tabIndex="0"
                    aria-label="View Resume"
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            openModal();
                        }
                    }}
                >
                    <iframe
                        src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
                        title="Resume Thumbnail"
                        className="resume-thumbnail"
                    />

                    <div className="resume-preview-overlay">
                        <span>View Resume</span>
                    </div>
                    </div>
                </div>
            </div>
             {isModalOpen && (
                <div
                    className="resume-modal-overlay"
                    onClick={closeModal}
                    role="presentation"
                >
                    <div
                        className="resume-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="resume-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="resume-modal-header">
                            <h2 id="resume-modal-title">Resume Preview</h2>

                            <button
                                type="button"
                                className="resume-close-button"
                                onClick={closeModal}
                                aria-label="Close resume preview"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="resume-modal-body">
                            <iframe
                                src={resumePath}
                                title="Jael Roman resume preview"
                                className="resume-preview"
                            >
                                <p>
                                    Your browser cannot display this PDF.
                                </p>
                            </iframe>
                        </div>

                        <div className="resume-modal-footer">
                            <a
                                href={resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-open-link"
                            >
                                Open in New Tab
                            </a>

                            <a
                                href={resumePath}
                                download="Jael-Roman-Resume.pdf"
                                className="resume-download-link"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Resume;