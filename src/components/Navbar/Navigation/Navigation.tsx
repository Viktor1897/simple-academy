import styled from "@emotion/styled";
import { COLORS, LINKS } from "consts";

type NavigationProps = {
    /**
     * @default "desktop"
     */
    variant?: "desktop" | "mobile";
    onNavigationClick?: () => void;
}

const Navigation = ({ variant, onNavigationClick }: NavigationProps) => {
    
    const goTo = (href: string): void => {
        document.querySelector(`#${href}`)?.scrollIntoView({
            behavior: "smooth",
        });
        onNavigationClick && onNavigationClick();
    };

    return (
        <Nav variant={variant}>
            <Ul variant={variant}>
                <li>
                    <a onClick={() => goTo(LINKS.ABOUT_US)}>O NAS</a>
                </li>
                <li>
                    <a onClick={() => goTo(LINKS.COURSES)}>SZKOLIENIA</a>
                </li>
                <li>
                    <a  onClick={() => goTo(LINKS.CONTACT)}>KONTAKT</a>
                </li>
                { variant === "mobile" && <>
                    <li>
                        <a  onClick={() => goTo(LINKS.TUTORS)}>WYKŁADOWCY</a>
                    </li>
                    <li>
                        <a  onClick={() => goTo(LINKS.GRADUATES)}>ABSOLWENCI</a>
                    </li>
                    <li>
                        <a  onClick={() => goTo(LINKS.BARBERSHOP)}>BARBERSHOP</a>
                    </li>
                </>}
            </Ul>
        </Nav>
    );
};

export default Navigation;

const Nav = styled.nav<NavigationProps>`
    width: 100%;
    max-width: ${props => props.variant !== "mobile" && "40rem"};
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
        width: 100%;

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
                background-color: #00000095;
            };
         }
     }
`;
