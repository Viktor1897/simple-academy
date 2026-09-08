import Phone from "assets/phone.svg";
import AboutUsSection from "components/AboutUsSection/AboutUsSection";
import BarbershopSection from "components/BarbershopSection/BarbershopSection";
import CopyrightSection from "components/CopyrightSection/CopyrightSection";
import CoursesSection from "components/CoursesSection/CoursesSection";
import FaqSection from "components/FaqSection/FaqSection";
import { Footer } from "components/Footer/Footer";
import GraduatesSection from "components/GraduatesSection/GraduatesSection";
import InfoIconsSection from "components/InfoIconsSection/InfoIconsSection";
import MarqueeSection from "components/MarqueeSection/MarqueeSection";
import Navbar from "components/Navbar/Navbar";
import { CallUsBtn } from "components/StyledHtml/StyledHtml";
import TutorsSection from "components/TutorsSection/TutorsSection";
import { CONTACTS } from "consts";
import { useMediaQuery } from "hooks/useMediaQuery";

import Header from "../../components/Header/Header";

function HomeLayout() {
    const isMobile = useMediaQuery("(max-width: 850px)");

    return (
        <>
            <Navbar />
            <main>
                <Header />
                <MarqueeSection />
                <CoursesSection />
                <InfoIconsSection />
                <AboutUsSection />
                <GraduatesSection />
                <TutorsSection />
                <BarbershopSection />
                <FaqSection />
            </main>
            <Footer />
            <CopyrightSection />
            {isMobile && (
                <CallUsBtn href={CONTACTS.phoneHref} aria-label={CONTACTS.phone}>
                    <img src={Phone} alt="" style={{ width: "2.6rem" }} />
                </CallUsBtn>
            )}
        </>
    );
}

export default HomeLayout;
