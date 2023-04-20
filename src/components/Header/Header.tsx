import styled from "@emotion/styled";
import headerBg from "assets/header_bg.jpg";
import { Button, ContentWrapper, H2 } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <HeaderElement>
            <ContentWrapper gap="none" flexDirection="column" alignItems="center">
                <Navbar/>
                <H2 marginBottom="6.7rem" color={COLORS.white}>ZOSTAŃ BARBEREM ZA 30 DNI I ZARABIAJ OD 5000 ZŁ/MES</H2>
                <Button maxWidth="42.2rem" padding="2.3rem 0" fontSize="3.5rem">SKONTAKTUJ SIĘ</Button>
            </ContentWrapper>
        </HeaderElement>
    );
};

export default Header;

const HeaderElement = styled.header`
    background: no-repeat center top url(${headerBg});
    display: flex;
    justify-content: center;
    padding-bottom: 31.7rem;
`;