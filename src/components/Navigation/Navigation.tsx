import styled from "@emotion/styled";
import { Link } from "@mui/material";

const Ul = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    margin-right: 45px;
    list-style-type: none;
`;


const Navigation = () => {
    
    return (
        <nav>
            <Ul>
                <Li>
                    <Link href="#">O NAS</Link>
                </Li>
                <Li>
                    <Link href="#">SZKOLIENIA</Link>
                </Li>
                <Li>
                    <Link href="#">KONTAKT</Link>
                </Li>
            </Ul>
        </nav>
    );
};

export default Navigation;