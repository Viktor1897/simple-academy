import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";
import Navigation from "components/Navbar/Navigation/Navigation";

import LanguageSelect from "../LanguageSelect/LanguageSelect";

const NavbarDesktop = () => {
    return (
        <NavBarContainer>
            <LogoImage src={AcademyLogo} alt="simple academy"/>
            <Navigation />
            <LanguageSelect />
        </NavBarContainer>
    );
};

export default NavbarDesktop;

export const LogoImage = styled.img`
    width: 26.5rem;
`;

export const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
`;
