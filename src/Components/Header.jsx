import BottomBanner from "./BottomBanner";
import TopBanner from "./TopBanner";

const Header = () => {
    return (
        <>
            <section className="header">
                <section className="about">
                    <TopBanner />
                    <BottomBanner />
                </section>
            </section>
        </>
    )
};

export default Header;