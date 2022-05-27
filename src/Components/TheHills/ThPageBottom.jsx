import { useEffect, useRef } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';

function ThPageBottom() {


    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <>
            <section className="bottom-banner">
                <div className="video">
                    <video
                        style={{ maxWidth: "100%", width: "1000px", margin: "0 auto" }}
                        playsInline
                        loop
                        muted
                        controls
                        alt="All the devices"
                        src={require("../../Styles/content/thehills_demo.mp4")}
                        ref={videoEl}
                    />
                </div>
            </section>

            <div className="line line--portfolio-version"></div>

            <Link to="/" style={{ textDecoration: 'none' }}><section className="return">
                <MdArrowBack /> <h5>Go back</h5>
            </section></Link>
        </>

    )
}

export default ThPageBottom