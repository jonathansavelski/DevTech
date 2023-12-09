import React from 'react'
import { NavbarContainerStyled, LogoImg, LinksContainerStyled, MenuContainerStyled, NavLinkStyled, Fondo } from './NavbarStyles'
import Logo from '../../../public/assets/Logo.png';
import Icon from './Icon';
import { MenuContext } from "../../context/Context";
import { useContext } from "react";

const Navbar = () => {
    const ctx = useContext(MenuContext);

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
                    <NavLinkStyled to='/#'>Jobs</NavLinkStyled>
                    <NavLinkStyled to='contact'>Contact</NavLinkStyled>
                </LinksContainerStyled>
                <Icon />
            </NavbarContainerStyled>
        </>
    )
}

export default Navbar
