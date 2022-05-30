import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";


const Nav = () => (

    <section className="navbar">
        <div className="vertical-line"></div>
        <Link to="/email"><div className="navbar-icons navbar-icons--mail"><MdContactMail />
            <div className="tooltiptext"><p>sofia.emteryd@gmail.com</p></div>
        </div></Link>
        <a href="https://github.com/SofiaEmt" target="_blank"><GoMarkGithub className="navbar-icons" /></a>
        <a href="https://linkedin.com/in/sofia-emteryd" target="_blank"><BsLinkedin className="navbar-icons" /></a>

    </section >
);

export default Nav;