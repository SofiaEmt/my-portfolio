import React from 'react'
import PortfolioNav from '../PortfolioNav';

function GlcPageTop() {
    return (
        <section className="about">
            <div className="top-banner-wrapper top-banner-wrapper--portfolio">

                <div className="top-banner">
                    <h2>Good Luck Chuck</h2>
                </div>
                <PortfolioNav />
            </div>
            <div className="line line--portfolio-version"></div>
            <div className="top-banner top-banner--without-padding">
                <p className="portfolio-description">
                    This is one of the projects that I had most fun working on!<br />
                    In this project me and a group of classmates worked with Phaser 3 to
                    create a top-down shooter game. My biggest learnings from this project was
                    the ability to debug and paircode. I also dived more deeply in to the Javascript language
                    and increased my learnings there.
                </p>

                <section className="tool-banner">
                    <div className="what-tools">
                        <h5 className="tool">Javascript</h5>
                        <h5 className="tool">Phaser 3</h5>
                    </div>
                    <div className="what-links">
                        <a href="https://github.com/BenCiantar/zombie-game-project" target="_blank" rel="noreferrer noopener">Project on Github</a>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default GlcPageTop