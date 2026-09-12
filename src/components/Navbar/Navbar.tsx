import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";
import { Button } from "components/StyledHtml/StyledHtml";
import { COLORS, CONTACTS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";

import LanguageSelect from "./LanguageSelect/LanguageSelect";
import Navigation from "./Navigation/Navigation";

const Navbar = () => {
    // below this the six links crowd the logo, so the MENU badge takes over
    const isDesktop = useMediaQuery("(min-width: 1200px)");
    const { t } = useTranslation();
    const [isScrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isDesktop) setMenuOpen(false);
    }, [isDesktop]);

    const signUp = () => {
        setMenuOpen(false);
        goTo(LINKS.CONTACT);
    };

    return (
        <>
            <HeaderBar isScrolled={isScrolled || isMenuOpen}>
                <Inner>
                    <LogoButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="SIMPLE ACADEMY">
                        <LogoImage src={AcademyLogo} alt="SIMPLE ACADEMY" />
                    </LogoButton>

                    {isDesktop && <Navigation />}

                    <RightSide>
                        <LanguageSelect />
                        <SignUpButton fontSize="1.4rem" padding="1.5rem 2.6rem" onClick={signUp}>
                            {t("menu.signUp")}
                        </SignUpButton>
                        {!isDesktop && (
                            <MenuBadge isOpen={isMenuOpen} onClick={() => setMenuOpen(prev => !prev)}>
                                {isMenuOpen ? t("menu.close") : t("menu.menu")}
                            </MenuBadge>
                        )}
                    </RightSide>
                </Inner>
            </HeaderBar>

            <Overlay isOpen={isMenuOpen}>
                <OverlayInner>
                    <Navigation variant="mobile" onNavigationClick={() => setMenuOpen(false)} />
                    <OverlayFooter>
                        <OverlayLink href={CONTACTS.phoneHref}>{CONTACTS.phone}</OverlayLink>
                        <OverlayLink target="_blank" rel="noreferrer" href={CONTACTS.instagram}>
                            {CONTACTS.instagramLabel}
                        </OverlayLink>
                        <Button width="100%" onClick={signUp}>{t("menu.signUp")}</Button>
                    </OverlayFooter>
                </OverlayInner>
            </Overlay>
        </>
    );
};

export default Navbar;

const HeaderBar = styled.header<{ isScrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    display: flex;
    justify-content: center;
    /* the hero is a colour block, so the bar always sits on its own sheet of paper */
    padding: ${props => (props.isScrolled ? "1.1rem 4rem" : "1.8rem 4rem")};
    background: ${COLORS.paper};
    border-bottom: 1px solid ${props => (props.isScrolled ? COLORS.line : "transparent")};
    box-shadow: ${props => (props.isScrolled ? "0 0.6rem 2rem rgba(43,42,40,.09)" : "none")};
    transition: padding .3s ease, border-color .3s ease, box-shadow .3s ease;
    @media (max-width: 600px) {
        padding: ${props => (props.isScrolled ? "1.1rem 2rem" : "1.4rem 2rem")};
    }
`;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

const LogoButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
`;

const LogoImage = styled.img`
    width: 17rem;
    max-width: 40vw;
    /* the logo asset is white, the header sits on light paper */
    filter: invert(1);
`;

const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const SignUpButton = styled(Button)`
    white-space: nowrap;
    @media (max-width: 760px) {
        display: none;
    }
`;

const MenuBadge = styled.button<{ isOpen: boolean }>`
    border: none;
    cursor: pointer;
    border-radius: 0;
    padding: 1.5rem 2.4rem;
    line-height: 1;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${COLORS.paper};
    background: ${props => (props.isOpen ? COLORS.blue : COLORS.ink)};
    transition: background-color .25s ease;
    &:hover {
        background: ${COLORS.blue};
    }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    inset: 0;
    z-index: 25;
    /* paper at 60%, so the page reads through without the links losing contrast */
    background: ${COLORS.paper}99;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    padding: 12rem 2rem 4rem;
    overflow-y: auto;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    visibility: ${props => (props.isOpen ? "visible" : "hidden")};
    transform: translateY(${props => (props.isOpen ? "0" : "-1.5rem")});
    transition: opacity .35s ease, transform .35s ease, visibility .35s ease;
`;

const OverlayInner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6rem;
`;

const OverlayFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    padding-top: 3rem;
    border-top: 1px solid ${COLORS.line};
`;

const OverlayLink = styled.a`
    color: ${COLORS.ink};
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    &:hover {
        color: ${COLORS.blue};
    }
`;
