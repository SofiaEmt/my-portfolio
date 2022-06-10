import SudokuPageTop from "./SudokuPageTop";
import SudokuPageBottom from "./SudokuPageBottom";


import { useEffect } from "react";

function SudokuPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>


            <section className="portfolio-page">
                <section className="portfolio-content">
                    <SudokuPageTop />
                    <SudokuPageBottom />
                </section>
            </section>
        </>

    )
}

export default SudokuPage