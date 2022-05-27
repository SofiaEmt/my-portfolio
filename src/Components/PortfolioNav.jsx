import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const PortfolioNav = () => (
    <section className="navbar">
        <a href="https://github.com/SofiaEmt" target="_blank"><GoMarkGithub className="navbar-icons" /></a>
        <a href="https://linkedin.com/in/sofia-emteryd" target="_blank"><BsLinkedin className="navbar-icons" /></a>
    </section >
);

export default PortfolioNav;