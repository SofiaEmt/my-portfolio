import ThPageTop from "./ThPageTop";
import ThPageBottom from "./ThPageBottom";


import { useEffect } from "react";

function ThPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>


            <section className="portfolio-page">
                <section className="portfolio-content">
                    <ThPageTop />
                    <ThPageBottom />
                </section>
            </section>
        </>

    )
}

export default ThPage