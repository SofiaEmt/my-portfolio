import BottomBanner from "./BottomBanner";
import Nav from "./Nav";
import TopBanner from "./TopBanner";

const Header = () => (
    <>
        <section className="header">
            <section className="about">
                <TopBanner />
                <BottomBanner />
            </section>
        </section>
    </>
);

export default Header;