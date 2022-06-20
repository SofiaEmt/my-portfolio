import React from 'react'
import PortfolioNav from '../PortfolioNav';

function SudokuPageTop() {
    return (
        <section className="about">
            <div className="top-banner-wrapper top-banner-wrapper--portfolio">

                <div className="top-banner">
                    <h2>Sudoku Player</h2>
                </div>
                <PortfolioNav />
            </div>
            <div className="line line--portfolio-version"></div>
            <div className="top-banner top-banner--without-padding">
                <p className="portfolio-description">
                    This is a personal project I did at the end of the last module on Hyper Island. <br />
                    I've always been a super fan of playing sudoku, having done so a lot since I first
                    learnt it at 9 year's old. I've even managed to start sudoku play-offs at my work place,
                    when there's not much to do.
                    In this project I went back to vanilla Javascript, focusing lots on UI in the
                    design process.

                </p>

                <section className="tool-banner">
                    <div className="what-tools">
                        <h5 className="tool">HTML</h5>
                        <h5 className="tool">Sass</h5>
                        <h5 className="tool">Javascript</h5>
                    </div>
                    <div className="what-links">
                        <a href="https://github.com/SofiaEmt/sudokuinspace" target="_blank" rel="noreferrer noopener"> Project on Github</a>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default SudokuPageTop