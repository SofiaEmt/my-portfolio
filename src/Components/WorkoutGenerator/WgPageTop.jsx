import React from 'react'
import PortfolioNav from '../PortfolioNav'

function WgPageTop() {
    return (
        <section className="about">
            <div className="top-banner-wrapper top-banner-wrapper--portfolio">
                <div className="top-banner">
                    <h2>Workout Generator</h2>
                </div>
                <PortfolioNav />

            </div>
            <div className="line line--portfolio-version"></div>
            <div className="top-banner top-banner--without-padding">
                <p className="portfolio-description">
                    Workout Generator is the first individual project I did on Hyper Island.<br />
                    As a person who've always excercised a lot I found that the
                    workout generator's that exist online had bad UI and were difficult to use.<br />
                    I wanted to create a website where you only had to click once to get
                    a good and heavy workout generated for you. So that's what I did!
                </p>

                <section className="tool-banner">
                    <div className="what-tools">
                        <h5 className="tool">HTML</h5>
                        <h5 className="tool">SCSS</h5>
                        <h5 className="tool">Javascript</h5>
                    </div>
                    <div className="what-links">
                        <a href="https://github.com">Project on Github</a>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default WgPageTop