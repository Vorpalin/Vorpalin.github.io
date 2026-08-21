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
                    Passionate about computer science
                </p>

            </div>

        </section>
    );
}

export default Home;
