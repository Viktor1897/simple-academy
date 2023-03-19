import AboutUsSection from "components/AboutUsSection/AboutUsSection";
import CoursesSection from "components/CoursesSection/CoursesSection";
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
        </>
    );
}

export default HomeLayout;