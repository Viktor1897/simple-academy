import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";
import PhoneIcon from "assets/phone_filled.svg";
import Navigation from "components/Navbar/NavbarDesktop/Navigation/Navigation";
import { Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const NavbarDesktop = () => {
    return (
        <NavBarContainer>
            <LogoImage src={AcademyLogo} alt="simple academy"/>
            <CallMeBlock>
                <CallMeItem>
                    <img src={PhoneIcon} />
                    <Text color={COLORS.white}>+ 48 786 677 659</Text>
                </CallMeItem>
                <CallMeItem>
                    <Text fontSize="1.6rem" textDecoration="underline" color={COLORS.white}>Oddzwoń do mnie</Text>
                </CallMeItem>
            </CallMeBlock>
            <Text color="white">RU PL</Text>
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
    padding: 4rem 0;
`;

const CallMeBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    @media (max-width: 1100px) {
        display: none;
    };
`;

const CallMeItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
`;
