import styled from "@emotion/styled";
import { COLORS, LINKS } from "consts";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";

import { AboutIcon, BarbershopIcon, ContactIcon, CoursesIcon, TutorsIcon, WorksIcon } from "./MenuIcons";

type NavigationProps = {
    /**
     * @default "desktop"
     */
    variant?: "desktop" | "mobile";
    onNavigationClick?: () => void;
};

const ITEMS = [
    { href: LINKS.ABOUT_US, label: "menu.about", Icon: AboutIcon },
    { href: LINKS.COURSES, label: "menu.courses", Icon: CoursesIcon },
    { href: LINKS.GRADUATES, label: "menu.graduates", Icon: WorksIcon },
    { href: LINKS.TUTORS, label: "menu.tutors", Icon: TutorsIcon },
    { href: LINKS.BARBERSHOP, label: "menu.barbershop", Icon: BarbershopIcon },
    { href: LINKS.CONTACT, label: "menu.contacts", Icon: ContactIcon },
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
                {ITEMS.map(({ href, label, Icon }) => (
                    <li key={href}>
                        <NavLink variant={variant} onClick={() => goToAnchor(href)}>
                            {variant === "mobile" && <Mark><Icon /></Mark>}
                            {t(label)}
                            {variant === "mobile" && <Arrow aria-hidden="true" />}
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
    /* inside the sheet the list owns every pixel between the bar and the contacts */
    ${props => (props.variant === "mobile" ? "flex: 1;" : "")}
`;

const RULE = "1px solid rgba(43, 42, 40, .14)";

const Ul = styled.ul<NavigationProps>`
    display: flex;
    flex-direction: ${props => (props.variant === "mobile" ? "column" : "row")};
    align-items: ${props => (props.variant === "mobile" ? "stretch" : "center")};
    gap: ${props => (props.variant === "mobile" ? "0" : "3rem")};
    margin: 0;
    padding: 0;
    & li {
        list-style-type: none;
    }
    ${props => props.variant === "mobile" && `
        flex: 1;
        /* ruled rows share the spare height, so a tall phone gets generous
           tap targets instead of a hole under the last link */
        & li {
            flex: 1 1 auto;
            display: flex;
            border-bottom: ${RULE};
        }
        & li:first-of-type {
            border-top: ${RULE};
        }
    `}
`;

const Mark = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    /* a fixed box keeps every label starting on the same vertical line */
    width: 3.2rem;
    flex-shrink: 0;
    margin-right: 1.8rem;
    color: ${COLORS.blue};
    transition: transform .25s ease;
    & svg {
        width: 100%;
        height: auto;
    }
`;

const Arrow = styled.span`
    margin-left: auto;
    align-self: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    border-top: 2px solid ${COLORS.textMuted};
    border-right: 2px solid ${COLORS.textMuted};
    transform: translateX(0) rotate(45deg);
    transition: transform .25s ease, border-color .25s ease;
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
    }
    ${props => props.variant === "mobile" && `
        flex: 1;
        display: flex;
        /* baseline alignment pushed the whole row's text against the top rule */
        align-items: center;
        -webkit-tap-highlight-color: transparent;
        padding: 1.5rem 0;
        /* a short phone can't afford the airy rows — fall back to a tight list */
        @media (max-height: 720px) {
            padding: 0.8rem 0;
        }
        /* the arrow is the last child only in this variant */
        &:hover > span:last-child,
        &:active > span:last-child {
            transform: translateX(0.5rem) rotate(45deg);
            border-color: ${COLORS.blue};
        }
        &:active {
            color: ${COLORS.blue};
        }
    `}
`;
