import styled from "@emotion/styled";
import Navigation from "components/Navbar/Navigation/Navigation";
import { COLORS } from "consts";

function Menu({ onNavigationClick }: { onNavigationClick?: () => void} ) {
    return (
        <MenuContainer>
            <Navigation variant="mobile" onNavigationClick={onNavigationClick} />
        </MenuContainer>
    );
}

export default Menu;

const MenuContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    pointer-events: auto;
    overflow: hidden;
    background-color: ${COLORS.black}eb;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;