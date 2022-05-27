import React from 'react'
import { FaShuttleVan } from "react-icons/fa";

function BottomBanner() {
    return (
        <section className="bottom-banner">
            <FaShuttleVan className="van" />
            <div className="line"></div>
            <div className="bottom-banner-left">
                <p>
                    I’m a 23 year old with experience in sales,
                    project management, leadership & collaboration. </p>
                <h3 className="code-types-i-know">I've learned to fail fast & trust the process.</h3>
                <p className="p-margin-up">Right now I'm a Frontend Developer student Hyper Island.
                    There I’ve gotten the opportunity to exercise my competence as a team member and web developer.  </p>

            </div>

            <div className="line"></div>

            <div className="bottom-banner-right">

                <h3 className="code-types-i-know">I've learned to fail fast & trust the process.</h3>
                <article className="left-side">
                    <p>I’m a passionate person who outside from studies and work love to
                        travel with my home-built van around Europe.  </p>
                </article>
                <article className="right-side">
                    <p>Regular sauna bathing and walks in nature is what keeps me sane!</p>
                </article>

            </div>

            <div className="line line--before-portfolio"></div>
        </section>
    )
}

export default BottomBanner