import AboutUsSection from "components/AboutUsSection/AboutUsSection";
import BarbershopSection from "components/BarbershopSection/BarbershopSection";
import CoursesSection from "components/CoursesSection/CoursesSection";
import FaqSection from "components/FaqSection/FaqSection";
import FloatingCallBtn from "components/FloatingCallBtn/FloatingCallBtn";
import { Footer } from "components/Footer/Footer";
import GallerySection from "components/GallerySection/GallerySection";
import Header from "components/Header/Header";
import HeroSection from "components/HeroSection/HeroSection";
import IntroSection from "components/IntroSection/IntroSection";
import MethodSection from "components/MethodSection/MethodSection";
import { SiteShell } from "components/StyledHtml/StyledHtml";
import TutorsSection from "components/TutorsSection/TutorsSection";

const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function HomeLayout() {
    const goTo = (id: string) => {
        scrollTo(id);
    };

    return (
        <SiteShell>
            <Header onNavigate={goTo} />
            <HeroSection onNavigate={goTo} />
            <IntroSection />
            <CoursesSection onNavigate={goTo} />
            <GallerySection />
            <AboutUsSection />
            <MethodSection />
            <TutorsSection />
            <BarbershopSection />
            <FaqSection />
            <Footer />
            <FloatingCallBtn />
        </SiteShell>
    );
}

export default HomeLayout;
