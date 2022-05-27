import PortfolioNav from "./../PortfolioNav";
import { useEffect } from "react";
import GlcPageTop from "./GlcPageTop";
import GlcPageBottom from "./GlcPageBottom";
import Nav from "../Nav";

function GlcPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>


            <section className="portfolio-page">
                <section className="portfolio-content">
                    <GlcPageTop />
                    <GlcPageBottom />
                </section>
            </section>
        </>

    )
}

export default GlcPage