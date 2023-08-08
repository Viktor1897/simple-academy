import styled from "@emotion/styled";
import AcademyLogo from "assets/logo.svg";
import { Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";
import { useState } from "react";

import { LogoImage, NavBarContainer } from "../NavbarDesktop/NavbarDesktop";
import Menu from "./Menu/Menu";

const NavbarMobile = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    return (
        <MobileNavBar>
            <MenuBtn onClick={() => setMenuActive((prev) => !prev)}>
                <MenuIcon isActive={isMenuActive} />
            </MenuBtn>
            <LogoImage src={AcademyLogo} alt="simple academy"/>
            <Text color={COLORS.white}>EN</Text>
            {isMenuActive && <Menu />}
        </MobileNavBar>
    );
};

export default NavbarMobile;

const MobileNavBar = styled(NavBarContainer)`
    position: fixed;
    background-color: ${COLORS.black};
    padding: 3rem 2rem;
    opacity: 0.9;
    z-index: 2;
`;


type MenuIconProps = {
    isActive: boolean;
}

const MenuBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 7rem;
`;

const MenuIcon = styled.div<MenuIconProps>`
    width: 3.5rem;
    height: ${props => !props.isActive ? "4px" : "0"};
    background: #fff;
    position: relative;
    left: 10px;
    transition: ${props => !props.isActive ? "all .5s ease-out" : ""};
    &::before {
        content: '';
        position: absolute;
        width: 3.5rem;
        height: 4px;
        left: 0;
        background: #fff;
        transition: all .5s ease-in-out;
        transform: ${props => !props.isActive ? "translateY(-0.75em)" : "rotate(45deg)"};
    };
    &::after {
        content: '';
        position: absolute;
        width: 3.5rem;
        height: 4px;
        left: 0;
        background: #fff;
        transition: all .5s ease-in-out;
        transform: ${props => !props.isActive ? "translateY(0.75em)" : "rotate(-45deg)"};
    };
`;