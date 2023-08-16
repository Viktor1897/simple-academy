import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";
import Navigation from "components/Navbar/Navigation/Navigation";
import { Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

import LanguageSelect from "../LanguageSelect/LanguageSelect";

const NavbarDesktop = () => {
    return (
        <NavBarContainer>
            <LogoImage src={AcademyLogo} alt="simple academy"/>
            <Text color={COLORS.white}>+ 48 786 677 659</Text>
            <LanguageSelect />
            <Navigation />
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
