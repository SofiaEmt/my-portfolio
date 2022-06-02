
import WgPageBottom from "./WgPageBottom";
import WgPageTop from "./WgPageTop";

import { useEffect } from "react";

function WgPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>


            <section className="portfolio-page">
                <section className="portfolio-content">
                    <WgPageTop />
                    <WgPageBottom />
                </section>
            </section>
        </>

    )
}

export default WgPage