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
        & li {
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
    width: 2.4rem;
    flex-shrink: 0;
    margin-right: 1.6rem;
    color: ${COLORS.blue};
    & svg {
        width: 100%;
        height: auto;
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
        flex: 1;
        display: flex;
        align-items: center;
        font-weight: 500;
        letter-spacing: 0.02em;
        font-size: 1.9rem;
        line-height: 1.3;
        padding: 1.3rem 0;
        -webkit-tap-highlight-color: transparent;
        &:active {
            color: ${COLORS.blue};
        }
    `}
`;
