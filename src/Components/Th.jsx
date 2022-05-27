import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si";
import { Link } from 'react-router-dom';

function Th() {
    return (
        <>
            <Link to="/the-hills">
                <div className="hover">
                    <div className="gradient">
                        <figure>
                            <img src={require("../Styles/content/th.jpg")}></img>
                            <article className="desc">
                                <h5>The Hills</h5>
                                <div className="what-tools">
                                    <SiHtml5 />
                                    <SiSass />
                                    <SiJavascript />
                                    <SiMongodb />
                                    <SiNodedotjs />
                                    <SiExpress />
                                </div>
                            </article>
                        </figure>
                    </div>
                </div>
            </Link>
        </>


    )
}

export default Th