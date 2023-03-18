import { Box, Button } from "@mui/material";
import AboutUsSection from "components/AboutUsSection/AboutUsSection";
import CoursesSection from "components/CoursesSection/CoursesSection";
import GraduatesSection from "components/GraduatesSection/GraduatesSection";
import InfoIconsSection from "components/InfoIconsSection/InfoIconsSection";
import TutorsSection from "components/TutorsSection/TutorsSection";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import { LOGIN_ROUTE } from "../../routers/consts";


function HomeLayout() {

    const navigate = useNavigate();

    return (
        <Box>
            <Header />
            <InfoIconsSection />
            <AboutUsSection />
            <CoursesSection />
            <TutorsSection />
            <GraduatesSection />
            <Button onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
        </Box>
    );
}

export default HomeLayout;