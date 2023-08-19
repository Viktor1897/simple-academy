import Phone from "assets/phone.svg";
import AboutUsSection from "components/AboutUsSection/AboutUsSection";
import BarbershopSection from "components/BarbershopSection/BarbershopSection";
import CopyrightSection from "components/CopyrightSection/CopyrightSection";
import CoursesSection from "components/CoursesSection/CoursesSection";
import { Footer } from "components/Footer/Footer";
import GraduatesSection from "components/GraduatesSection/GraduatesSection";
import InfoIconsSection from "components/InfoIconsSection/InfoIconsSection";
import { CallUsBtn } from "components/StyledHtml/StyledHtml";
import TutorsSection from "components/TutorsSection/TutorsSection";
import { useMediaQuery } from "hooks/useMediaQuery";

import Header from "../../components/Header/Header";


function HomeLayout() {
    const matches = useMediaQuery("(max-width: 850px)");


    return (
        <>
            <Header />
            <InfoIconsSection />
            <AboutUsSection />
            <CoursesSection />
            <TutorsSection />
            <GraduatesSection />
            <BarbershopSection />   
            <Footer />
            <CopyrightSection />
            {matches && <CallUsBtn href="tel: +48 786-677-659">
                <img src={Phone} alt="call us" style={{ width: "6rem" }} />
            </CallUsBtn>}
        </>
    );
}

export default HomeLayout;