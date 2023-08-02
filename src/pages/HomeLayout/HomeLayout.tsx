import AboutUsSection from "components/AboutUsSection/AboutUsSection";
import BarbershopSection from "components/BarbershopSection/BarbershopSection";
import CopyrightSection from "components/CopyrightSection/CopyrightSection";
import CoursesSection from "components/CoursesSection/CoursesSection";
import { Footer } from "components/Footer/Footer";
import GraduatesSection from "components/GraduatesSection/GraduatesSection";
import InfoIconsSection from "components/InfoIconsSection/InfoIconsSection";
import TutorsSection from "components/TutorsSection/TutorsSection";

import Header from "../../components/Header/Header";


function HomeLayout() {


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
        </>
    );
}

export default HomeLayout;