import { useState } from "react";
import { Link } from "react-router-dom";


function EmailPopUp() {

    const [popUpHidden, setPopUpHidden] = useState("false");
    const [buttonText, setButtonText] = useState('Copy');

    function changeButtonText() {
        setButtonText('Copied 😄');
        copyToClipBoard();

        setTimeout(() => {
            setButtonText(buttonText);
        }, 8000); // 👈️ change text back after 1 second
    }

    function copyToClipBoard() {
        navigator.clipboard.writeText('sofia.emteryd@gmail.com')
    }


    return (
        <div className={popUpHidden ? "faded-background-container" : "hide-pop-up"} >
            <div className="pop-up-display">
                <section className="pop-up-content">

                    <Link to="/"><span class="close-button" >&times;</span></Link>

                    <h3>sofia.emteryd@gmail.com</h3>
                    <button className="btn" onClick={changeButtonText}>
                        {buttonText}
                    </button>

                </section>
            </div>
        </div>
    )
}

export default EmailPopUp