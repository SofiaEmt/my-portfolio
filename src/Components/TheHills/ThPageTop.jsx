import React from 'react'
import PortfolioNav from '../PortfolioNav';

function ThPageTop() {
    return (
        <section className="about">
            <div className="top-banner-wrapper top-banner-wrapper--portfolio">

                <div className="top-banner">
                    <h2>The Hills</h2>
                </div>
                <PortfolioNav />
            </div>
            <div className="line line--portfolio-version"></div>
            <div className="top-banner top-banner--without-padding">
                <p className="portfolio-description">
                    In this project, we were supposed to create an e-commerce platform using
                    both frontend and backend languages.
                    Me and my team wanted to create something unique and fun, so instead of creating
                    a regular e-commerce website we created a space online where you could buy, style and
                    sell an apartment in this online space.
                    <br />
                    This project was super fun. It really established my confidence in team work and how
                    efficient, fun and professional it can be. It also increased my understanding of how
                    to intertwine frontend and backend to create a functional product. We had to do a lot
                    of problem solving during the module which was nice and as well.

                </p>

                <section className="tool-banner">
                    <div className="what-tools">
                        <h5 className="tool">HTML</h5>
                        <h5 className="tool">Sass</h5>
                        <h5 className="tool">Javascript</h5>
                        <h5 className="tool">MongoDB</h5>
                        <h5 className="tool">Node.js</h5>
                        <h5 className="tool">Express</h5>
                    </div>
                    <div className="what-links">
                        <a href="https://github.com/iseneld/m8__e-commerce" target="_blank" rel="noreferrer noopener">Frontend on Github</a>
                    </div>
                    <div className="what-links">
                        <a href="https://github.com/iwanast/m8_e-commerce-backend" target="_blank" rel="noreferrer noopener">Backend on Github</a>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default ThPageTop