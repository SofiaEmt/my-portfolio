import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Wg() {
    return (
        <>
            <Link to="/workout-generator">
                <div className="hover" >
                    <div className="gradient gradient--wg">
                        <figure>
                            <img src={require("../Styles/content/wg1.jpg")}></img>
                            <article className="desc">
                                <h5>Workout Generator</h5>
                                <div className="what-tools">
                                    <SiHtml5 />
                                    <SiSass />
                                    <SiJavascript />
                                </div>
                            </article>
                        </figure>
                    </div>
                </div>
            </Link>
        </>


    )
}

export default Wg