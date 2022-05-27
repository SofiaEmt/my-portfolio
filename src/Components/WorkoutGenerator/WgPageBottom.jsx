import React from 'react'
import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';

function WgPageBottom() {
    return (
        <>
            <section className="bottom-banner">

                <div className="still-section"><img src={require("../../Styles/content/wg2.jpg")}></img></div>
                <section className="row-section">
                    <div className="still-section"><img src={require("../../Styles/content/wg3.jpg")}></img></div>
                    <div className="still-section"><img src={require("../../Styles/content/wg4.png")}></img></div>
                </section>
                {/* <button className="git-btn">Github</button> */}
            </section>

            <div className="line line--portfolio-version"></div>

            <Link to="/" style={{ textDecoration: 'none' }}><section className="return">
                <MdArrowBack /> <h5>Go back</h5>
            </section></Link>
        </>

    )
}

export default WgPageBottom