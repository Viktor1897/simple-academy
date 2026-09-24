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
                {ITEMS.map(({ href, label }) => (
                    <li key={href}>
                        <NavLink variant={variant} onClick={() => goToAnchor(href)}>
                            {variant === "mobile" ? <Label>{t(label)}</Label> : t(label)}
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
    ${props => (props.variant === "mobile" ? "flex-direction: column;" : "")}
`;

const Ul = styled.ul<NavigationProps>`
    display: flex;
    flex-direction: ${props => (props.variant === "mobile" ? "column" : "row")};
    align-items: ${props => (props.variant === "mobile" ? "flex-start" : "center")};
    gap: ${props => (props.variant === "mobile" ? "0" : "3rem")};
    margin: 0;
    padding: 0;
    & li {
        list-style-type: none;
    }
`;

/* the labels are stored in capitals for the desktop bar; the sheet reads them in sentence case */
const Label = styled.span`
    display: inline-block;
    text-transform: lowercase;
    &::first-letter {
        text-transform: uppercase;
    }
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
    font-weight: 600;
    letter-spacing: 0.04em;
    font-size: 1.5rem;
    line-height: 1;
    transition: color .25s ease;
    &:hover {
        color: ${COLORS.blue};
    }
    ${props => props.variant === "mobile" && `
        text-transform: none;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 1.9rem;
        line-height: 1.3;
        padding: 1rem 0;
        -webkit-tap-highlight-color: transparent;
        &:active {
            color: ${COLORS.blue};
        }
    `}
`;
