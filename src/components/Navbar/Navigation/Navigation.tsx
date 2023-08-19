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
}

const Navigation = ({ variant, onNavigationClick }: NavigationProps) => {

    const { t } = useTranslation();

    const goToAnchor = (href: string) => {
        goTo(href);
        onNavigationClick && onNavigationClick();
    };

    return (
        <Nav variant={variant}>
            <Ul variant={variant}>
                <li>
                    <a onClick={() => goToAnchor(LINKS.ABOUT_US)}>{t("menu.about")}</a>
                </li>
                <li>
                    <a onClick={() => goToAnchor(LINKS.COURSES)}>{t("menu.courses")}</a>
                </li>
                <li>
                    <a  onClick={() => goToAnchor(LINKS.BARBERSHOP)}>{t("menu.barbershop")}</a>
                </li>
                <li>
                    <a  onClick={() => goToAnchor(LINKS.CONTACT)}>{t("menu.contacts")}</a>
                </li>
            </Ul>
        </Nav>
    );
};

export default Navigation;

const Nav = styled.nav<NavigationProps>`
    width: 100%;
    max-width: ${props => props.variant !== "mobile" && "55rem"};
    padding: 0 2rem;
    padding-top: ${props => props.variant === "mobile" && "5rem"};
`;

const Ul = styled.ul<NavigationProps>`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: ${props => props.variant === "mobile" ? "column" : "row"};
    margin: 0;
    padding: 0;
     & li {
        list-style-type: none;

        & a {
            display: block;
            text-align: center;
            padding: 1rem 0;
            border: none;
            cursor: pointer;
            font-weight: 500;
            font-size: ${props => props.variant === "mobile" ? "5rem" : "2.2rem"};
            color: ${COLORS.white};
            &:hover {
                color: ${COLORS.gold};
                background-color: ${props => props.variant === "mobile" && (COLORS.black + "95")};
            };
         }
     }
`;
