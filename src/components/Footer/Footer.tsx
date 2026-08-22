import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Alexis MIALON
                </p>

                <p>
                    Built with React & TypeScript
                </p>
            </div>
        </footer>
    );
}

export default Footer;
