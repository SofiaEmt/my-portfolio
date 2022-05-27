import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => (
    <>
        <section className="footer">
            <div className="icons-section">
                <a href="https://github.com/SofiaEmt" target="_blank"><GoMarkGithub className="navbar-icons footer-icons" /></a>
                <a href="https://linkedin.com/in/sofia-emteryd" target="_blank"><BsLinkedin className="navbar-icons footer-icons" /></a>
            </div>
            <div className="contact-section">

                <h3>Contact</h3>
                <p>Sofia Emteryd</p>
                <p>+46733224904</p>
                <p>sofia.emteryd@gmail.com</p>
            </div>

            <div className="download-section">
                <Link to="/sofia-emteryd-cv.png" target="_blank" className="cv-link" download><h2>Download CV here!</h2></Link>
            </div>
        </section>
    </>
);

export default Footer;