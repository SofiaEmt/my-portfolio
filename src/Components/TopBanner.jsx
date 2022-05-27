import { FaShuttleVan } from "react-icons/fa";
import Nav from "./Nav";

const TopBanner = () => {

    return (
        <>
            <div className="top-banner-wrapper">


                <section className="top-banner">
                    <h4>Hello, </h4>
                    {/* <div className="input-text"> */}
                    <h1 className="word">my name is
                        <span className="one"> S</span>
                        <span className="one">o</span>
                        <span className="one">f</span>
                        <span className="one">i</span>
                        <span className="one">a</span>
                    </h1>
                    {/* </div> */}

                    <h4>I’m a digital nomad in the making- with an aim to develop my programming skills whilst also looking to explore other areas in marketing, design, content creation and digital strategy.
                        My journey has just started and I’m looking forward so see where life will take me.</h4>

                </section>

                {/* <div className="vertical-line"></div> */}

                <div className="nav">
                    <Nav />
                </div>
            </div>
        </>
    )
}

export default TopBanner;