import { FaShuttleVan } from "react-icons/fa";
import Nav from "./Nav";

const TopBanner = () => {

    return (
        <>
            <div className="top-banner-wrapper">


                <section className="top-banner">
                    <h4>Hello, </h4>
                    {/* <div className="input-text"> */}
                    <h1 className="word">my name is Sofia
                        {/* <span className="one"> S</span>
                        <span className="one">o</span>
                        <span className="one">f</span>
                        <span className="one">i</span>
                        <span className="one">a</span> */}
                    </h1>
                    <h4>I'm a passionate and creative software developer in the making, wrapping up my studies as a Frontend Developer at Hyper Island.</h4>
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