import styled from "@emotion/styled";
import { COLORS } from "consts";

function Menu() {
    return (
        <MenuContainer>
            12
        </MenuContainer>
    );
}

export default Menu;

const MenuContainer = styled.div`
    background-color: red;
    width: 100%;
    height: 100%;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    pointer-events: auto;
    overflow: hidden;
    opacity: 0.85;
    background-color: ${COLORS.black};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;