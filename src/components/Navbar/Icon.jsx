import { CgMenuRight } from "react-icons/cg";
import { MenuContainerStyled } from './NavbarStyles'
import { MenuContext } from "../../context/Context";
import { useContext } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const Icon = () => {
    const ctx = useContext(MenuContext);

    return (
        <MenuContainerStyled onClick={ctx.toggleMenu}>
            <IconContainer $clicked={ctx.isMenuOpen} >
                <CgMenuRight className="menu-icon" />
                <CgClose className="close-icon" />
            </IconContainer>
        </MenuContainerStyled>
    );
};

export default Icon;

const IconContainer = styled.div`
    display: flex;
    gap: 1rem;
    .menu-icon {
        display: ${(props) => (props.$clicked ? "none" : "flex")};
    }
    .close-icon {
        display: ${(props) => (props.$clicked ? "flex" : "none")};
    } 
`