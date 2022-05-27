import { Link } from "react-router-dom";

const Download = () => (
    <section className="download-cv">
        <div className="line"></div>
        <Link to="/sofia-emteryd-cv.png" target="_blank" className="cv-link" download><h2>Download CV!</h2></Link>
        <div className="line"></div>
    </section>
);

export default Download;