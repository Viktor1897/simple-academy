import styled from "@emotion/styled";
import headerBg from "assets/header_bg.jpg";
import { Button, ContentWrapper, H2 } from "components/StyledHtml/StyledHtml";

import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <HeaderElement>
            <ContentWrapper>
                <Navbar/>
                <H2 marginBottom="67px">ZOSTAŃ BARBEREM ZA 30 DNI I ZARABIAJ OD 5000 ZŁ/MES</H2>
                <Button maxWidth="422px" padding="23px 0" fontSize="35px">SKONTAKTUJ SIĘ</Button>
            </ContentWrapper>
        </HeaderElement>
    );
};

export default Header;

const HeaderElement = styled.header`
    background: no-repeat center top url(${headerBg});
    display: flex;
    justify-content: center;
    padding-bottom: 317px;
`;