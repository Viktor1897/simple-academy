import styled from "@emotion/styled";
import { COLORS, LINKS } from "consts";

const Navigation = () => {
    
    const goTo = (href: string): void => {
        document.querySelector(`#${href}`)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <Nav>
            <Ul>
                <Li>
                    <Link onClick={() => goTo(LINKS.ABOUT_US)}>O NAS</Link>
                </Li>
                <Li>
                    <Link onClick={() => goTo(LINKS.COURSES)}>SZKOLIENIA</Link>
                </Li>
                <Li>
                    <Link  onClick={() => goTo(LINKS.CONTACT)}>KONTAKT</Link>
                </Li>
            </Ul>
        </Nav>
    );
};

export default Navigation;

const Nav = styled.nav`
    width: 100%;
    max-width: 40rem;
`;

const Ul = styled.ul`
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    list-style-type: none;
`;

const Link = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 2.2rem;
    color: ${COLORS.white};
`;