import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Sod() {
    return (
        <>
            <Link to="/sudoku-player">
                <div className="hover">
                    <div className="gradient">
                        <figure>
                            <img src={require("../Styles/content/sudoku.png")}></img>
                            <article className="desc">
                                <h5>Sudoku Player</h5>
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

export default Sod