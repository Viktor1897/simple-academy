import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  onNavigate: (id: string) => void;
};

const Header = ({ onNavigate }: HeaderProps) => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const goTo = (id: string) => {
        setMenuOpen(false);
        onNavigate(id);
    };

    return (
        <TopbarElement>
            <BrandButton onClick={() => goTo("home")} aria-label="Simple Academy">
                <BrandLogo src={logo} alt="Simple Academy" />
            </BrandButton>

            <NavLinks isOpen={menuOpen} aria-label={t("nav.aria")}>
                <NavLinkBtn onClick={() => goTo("courses")}>{t("nav.courses")}</NavLinkBtn>
                <NavLinkBtn onClick={() => goTo("gallery")}>{t("nav.gallery")}</NavLinkBtn>
                <NavLinkBtn onClick={() => goTo("about")}>{t("nav.about")}</NavLinkBtn>
                <NavLinkBtn onClick={() => goTo("tutors")}>{t("nav.tutors")}</NavLinkBtn>
                <NavLinkBtn onClick={() => goTo("contact")}>{t("nav.contact")}</NavLinkBtn>
            </NavLinks>

            <TopbarActions>
                <LanguageSwitcher aria-label={t("language.aria")}>
                    {["pl", "ru"].map((language) => (
                        <LangButton
                            key={language}
                            isActive={i18n.language === language}
                            onClick={() => i18n.changeLanguage(language)}
                        >
                            {language.toUpperCase()}
                        </LangButton>
                    ))}
                </LanguageSwitcher>
                <TopbarCta onClick={() => goTo("contact")}>{t("nav.signup")}</TopbarCta>
                <MenuToggle
                    isOpen={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={t("nav.menu")}
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                </MenuToggle>
            </TopbarActions>
        </TopbarElement>
    );
};

export default Header;

const TopbarElement = styled.header`
  position: absolute;
  inset: 20px 28px auto;
  z-index: 20;
  min-height: 64px;
  display: grid;
  grid-template-columns: 240px 1fr auto;
  align-items: center;
  gap: 28px;
  padding: 10px 12px 10px 18px;
  color: #fff;
  background: rgba(17, 17, 17, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.28);

  @media (max-width: 1040px) {
    grid-template-columns: 180px 1fr;
    inset: 12px 14px auto;
  }
`;

const BrandButton = styled.button`
  width: 170px;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const BrandLogo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

type NavLinksProps = {
  isOpen: boolean;
};

const NavLinks = styled.nav<NavLinksProps>`
  display: flex;
  justify-content: center;
  gap: clamp(18px, 2.4vw, 42px);

  @media (max-width: 1040px) {
    position: fixed;
    inset: 0;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(17, 17, 17, 0.98);
    opacity: ${props => props.isOpen ? 1 : 0};
    pointer-events: ${props => props.isOpen ? "auto" : "none"};
    transition: opacity 200ms ease;
  }
`;

const NavLinkBtn = styled.button`
  position: relative;
  color: inherit;
  background: transparent;
  border: 0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -7px;
    left: 0;
    height: 2px;
    background: var(--coral, #ff5b4d);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 1040px) {
    font-size: 20px;
  }
`;

const TopbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

type LangButtonProps = {
  isActive: boolean;
};

const LangButton = styled.button<LangButtonProps>`
  position: relative;
  background: transparent;
  border: 0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  min-width: 25px;
  padding: 6px 2px;
  color: ${props => props.isActive ? "#fff" : "rgba(255, 255, 255, 0.5)"};
  ${props => props.isActive && `
    text-decoration: underline;
    text-decoration-color: var(--coral, #ff5b4d);
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  `}
`;

const TopbarCta = styled.button`
  min-width: 150px;
  padding: 10px 24px;
  color: #fff;
  background: transparent;
  border: 2px solid #fff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 160ms ease, background 160ms ease;

  &:hover {
    color: var(--ink, #161616);
    background: #fff;
  }
`;

type MenuToggleProps = {
  isOpen: boolean;
};

const MenuToggle = styled.button<MenuToggleProps>`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    background: transparent;
    border: 0;
    cursor: pointer;
    z-index: 20;

    & span {
      display: block;
      width: 100%;
      height: 3px;
      background: #fff;
      transition: transform 200ms ease;
    }
  }
`;