import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Glc() {
    return (
        <Link to="/good-luck-chuck">
            <div className="hover">
                <div className="gradient">
                    <figure>
                        <img src={require("../Styles/content/glc.jpg")}></img>
                        <article className="desc">
                            <h5>Good Luck Chuck</h5>
                            <div className="what-tools">
                                <SiJavascript />
                            </div>
                        </article>
                    </figure>
                </div>
            </div>
        </Link>
    )
}

export default Glc