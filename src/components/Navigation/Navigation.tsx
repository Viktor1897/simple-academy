import styled from "@emotion/styled";
import { COLORS } from "consts";

const Navigation = () => {
    
    return (
        <nav>
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
        </nav>
    );
};

export default Navigation;

const Ul = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    margin-left: 45px;
    list-style-type: none;
`;

const A = styled.a`
    font-weight: 500;
    font-size: 22px;
    color: ${COLORS.white};
    text-decoration: none;
`;