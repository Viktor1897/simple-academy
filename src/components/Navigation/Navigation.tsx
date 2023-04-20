import styled from "@emotion/styled";
import { COLORS } from "consts";

const Navigation = () => {
    
    return (
        <Nav>
            <Ul>
                <Li>
                    <A href="#">O NAS</A>
                </Li>
                <Li>
                    <A href="#">SZKOLIENIA</A>
                </Li>
                <Li>
                    <A href="#">KONTAKT</A>
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

const A = styled.a`
    font-weight: 500;
    font-size: 2.2rem;
    color: ${COLORS.white};
    text-decoration: none;
`;