import React, { useState } from 'react';
import { NavbarContainerStyled, LogoImg, LinksContainerStyled, MenuContainerStyled, NavLinkStyled, Fondo } from './NavbarStyles'
import Logo from '../../../public/assets/Logo.png';
import Icon from './Icon';
import { MenuContext, PopupContext } from "../../context/Context";
import { useContext } from "react";
import Search from './Search';
import { FaSearch } from "react-icons/fa";
import { IconSearchContainer } from './NavbarStyles';
import Popup from '../../components/Navbar/SearchPopup';

const Navbar = () => {
    const ctx = useContext(MenuContext);
    const popupCtx = useContext(PopupContext);

    // const [isPopupOpen, setPopupOpen] = useState(false);

    // const openPopup = () => setPopupOpen(true);
    // const closePopup = () => setPopupOpen(false);

    const handleLinkClick = () => {
        // Obtiene el ancho de la ventana
        const windowWidth = window.innerWidth;

        // Cierra el menú solo si estamos en una pantalla móvil (ancho menor a 768)
        if (windowWidth <= 768) {
            ctx.toggleMenu();
        }
    }

    return (
        <>
            <Fondo $clicked={ctx.isMenuOpen} />
            <NavbarContainerStyled>
                <div>
                    <a href="/">
                        <LogoImg src={Logo} alt="Logo"></LogoImg>
                    </a>
                </div>
                <LinksContainerStyled $clicked={ctx.isMenuOpen} onClick={handleLinkClick}>

                    <NavLinkStyled to='/'>Home</NavLinkStyled>
                    <NavLinkStyled to='categories'>Courses</NavLinkStyled>
                    <NavLinkStyled to='about'>About us</NavLinkStyled>
                    <NavLinkStyled to='contact'>Contact</NavLinkStyled>
                </LinksContainerStyled>
                <Search />
                <IconSearchContainer $clicked={popupCtx.isPopupOpen} onClick={popupCtx.openPopup}>
                    <FaSearch />
                </IconSearchContainer>
                <Icon />
            </NavbarContainerStyled>

            <Popup isOpen={popupCtx.isPopupOpen} onClose={popupCtx.closePopup}>
                <h3>Search</h3>
                <Search />
            </Popup>
        </>
    )
}

export default Navbar
