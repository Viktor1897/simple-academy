import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";

const NavbarMobile = () => {
    return (
        <NavBarContainer>
            <LogoImage src={AcademyLogo} alt="simple academy"/>
        </NavBarContainer>
    );
};

export default NavbarMobile;

const LogoImage = styled.img`
    width: 26.5rem;
`;

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    margin-bottom: 18.6rem;
`;