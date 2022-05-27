import React from 'react'
import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';

function GlcPageBottom() {
    return (
        <>
            <section className="bottom-banner">

                <div className="still-section"><img src={require("../../Styles/content/glc.png")}></img></div>
                <div className="still-section"><img src={require("../../Styles/content/glc1.png")}></img></div>
                <div className="still-section"><img src={require("../../Styles/content/glc2.png")}></img></div>
                <div className="still-section"><img src={require("../../Styles/content/glc3.png")}></img></div>
            </section>

            <div className="line line--portfolio-version"></div>

            <Link to="/" style={{ textDecoration: 'none' }}><section className="return">
                <MdArrowBack /> <h5>Go back</h5>
            </section></Link>
        </>

    )
}

export default GlcPageBottom