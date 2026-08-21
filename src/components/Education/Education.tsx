import "./Education.css";

function Education() {
    return (
        <section id="education" className="education">
            <h2>Education</h2>

            <div className="education-timeline">

                <article className="education-item">
                    <div className="education-dot"></div>

                    <div className="education-card">
                        <span className="education-date">
                            2023 — 2028
                        </span>

                        <h3>
                            EPITA: School of Engineering 
                            and Computer Science
                        </h3>

                        <h4>
                            Master's Degree in Computer Science Engineering
                        </h4>

                        <p>
                            Current: 4th Year Student.
                        </p>

                        <div className="education-tags">
                        </div>
                    </div>
                </article>

                <article className="education-item">
                    <div className="education-dot"></div>

                    <div className="education-card">
                        <span className="education-date">
                            Jan 2025 - May 2025
                        </span>

                        <h3>Centria University of Applied Sciences</h3>

                        <h4>
                            International Semester in Finland
                        </h4>

                        <div className="education-tags">
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default Education;
