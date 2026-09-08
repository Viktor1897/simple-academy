import styled from "@emotion/styled";
import { COLORS, LINKS } from "consts";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";

type NavigationProps = {
    /**
     * @default "desktop"
     */
    variant?: "desktop" | "mobile";
    onNavigationClick?: () => void;
};

const ITEMS = [
    { href: LINKS.ABOUT_US, label: "menu.about" },
    { href: LINKS.COURSES, label: "menu.courses" },
    { href: LINKS.GRADUATES, label: "menu.graduates" },
    { href: LINKS.TUTORS, label: "menu.tutors" },
    { href: LINKS.BARBERSHOP, label: "menu.barbershop" },
    { href: LINKS.CONTACT, label: "menu.contacts" },
];

const Navigation = ({ variant = "desktop", onNavigationClick }: NavigationProps) => {
    const { t } = useTranslation();

    const goToAnchor = (href: string) => {
        goTo(href);
        onNavigationClick && onNavigationClick();
    };

    return (
        <Nav variant={variant}>
            <Ul variant={variant}>
                {ITEMS.map(({ href, label }, index) => (
                    <li key={href}>
                        <NavLink variant={variant} onClick={() => goToAnchor(href)}>
                            {variant === "mobile" && <Index>{`0${index + 1}`}</Index>}
                            {t(label)}
                        </NavLink>
                    </li>
                ))}
            </Ul>
        </Nav>
    );
};

export default Navigation;

const Nav = styled.nav<NavigationProps>`
    display: flex;
`;

const Ul = styled.ul<NavigationProps>`
    display: flex;
    flex-direction: ${props => (props.variant === "mobile" ? "column" : "row")};
    align-items: ${props => (props.variant === "mobile" ? "flex-start" : "center")};
    gap: ${props => (props.variant === "mobile" ? "1.2rem" : "3rem")};
    margin: 0;
    padding: 0;
    & li {
        list-style-type: none;
    }
`;

const Index = styled.span`
    color: ${COLORS.blue};
    font-size: 1.6rem;
    font-weight: 600;
    margin-right: 1.6rem;
`;

const NavLink = styled.a<NavigationProps>`
    display: inline-flex;
    align-items: baseline;
    border: none;
    background: none;
    cursor: pointer;
    color: ${COLORS.ink};
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    font-weight: ${props => (props.variant === "mobile" ? 800 : 600)};
    letter-spacing: ${props => (props.variant === "mobile" ? "-0.02em" : "0.04em")};
    font-size: ${props => (props.variant === "mobile" ? "clamp(3.2rem, 9vw, 5.4rem)" : "1.5rem")};
    line-height: ${props => (props.variant === "mobile" ? 1.1 : 1)};
    transition: color .25s ease, transform .25s ease;
    &:hover {
        color: ${COLORS.blue};
        transform: ${props => (props.variant === "mobile" ? "translateX(0.8rem)" : "none")};
    }
`;
