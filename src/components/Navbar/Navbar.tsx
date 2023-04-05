import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";
import PhoneIcon from "assets/phone_filled.svg";
import Navigation from "components/Navigation/Navigation";
import { Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const Navbar = () => {
    return (
        <NavBarContainer>
            <img src={AcademyLogo} alt="simple academy"/>
            <CallMeBlock>
                <CallMeItem>
                    <img src={PhoneIcon} />
                    <Text color={COLORS.white}>+ 48 786 677 659</Text>
                </CallMeItem>
                <CallMeItem>
                    <Text fontSize="16px" textDecoration="underline" color={COLORS.white}>Oddzwoń do mnie</Text>
                </CallMeItem>
            </CallMeBlock>
            <LangAndMenuWrapper>
                <Text color="white">RU PL</Text>
                <Navigation />
            </LangAndMenuWrapper>

        </NavBarContainer>
    );
};

export default Navbar;

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 40px 0;
    margin-bottom: 186px;
`;

const CallMeBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const CallMeItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

const LangAndMenuWrapper = styled.div`
    padding-top: 4px;
    display: flex;
`;