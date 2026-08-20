import "./Home.css"
import photoLinkedin from "../../assets/photo_linkedin.jpg"

function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">

                <img
                    className="profile-picture"
                    src={photoLinkedin}
                    alt="Alexis MIALON"
                />

                <h1>Alexis MIALON</h1>

                <h2>
                    Computer Science Engineering Student
                    <span>| EPITA</span>
                </h2>

                <p>
                    Student-researcher pursuing an Computer Science 
                    Engineering degree at EPITA. Passionate about computer 
                    science and artificial intelligence in particular,
                    I am eager to learn and apply my skills 
                    to real-world projects.
                </p>

            </div>

        </section>
    );
}

export default Home;
