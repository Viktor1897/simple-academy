import styled from "@emotion/styled";
import headerBg from "assets/header_bg.jpg";
import NavbarMobile from "components/Navbar/NavbarMobile/NavbarMobile";
import { Button, ContentWrapper, H2 } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";

import NavbarDesktop from "../Navbar/NavbarDesktop/NavbarDesktop";

const Header = () => {
    const matches = useMediaQuery("(min-width: 850px)");
    const { t } = useTranslation();
    return (
        <HeaderElement>
            <ContentWrapper gap="none" flexDirection="column" alignItems="center">
                {matches ? <NavbarDesktop/> : <NavbarMobile />}
                <H2 marginBottom="6.7rem" color={COLORS.white} style={{ marginTop: matches ? "18.6rem" : "32rem" }}>{t("header.title")}</H2>
                <Button variant="contained" onClick={() => goTo(LINKS.CONTACT)} maxWidth="42.2rem" padding="2.3rem 0" fontSize="3.5rem">{t("header.contactBtn")}</Button>
            </ContentWrapper>
        </HeaderElement>
    );
};

export default Header;

const HeaderElement = styled.header`
    background: no-repeat center top url(${headerBg});
    background-size: cover;
    display: flex;
    justify-content: center;
    padding-bottom: 31.7rem;
    padding-right:7%;
    padding-left: 7%;
`;