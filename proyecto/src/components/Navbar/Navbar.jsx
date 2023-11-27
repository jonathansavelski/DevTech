import React from 'react'
import { NavbarContainerStyled, LogoImg, LinksContainerStyled, MenuContainerStyled } from './NavbarStyles'
import Logo from '../../assets/Logo.png';
import { CgMenuRight } from "react-icons/cg";


const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <a href="/">
                    <LogoImg src={Logo} alt="Logo"></LogoImg>
                </a>
            </div>
            <LinksContainerStyled>
                <li><a href="#">Courses</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="#">Empleos</a></li>
                <li><a href="contact">Contact</a></li>
                <MenuContainerStyled>
                    <CgMenuRight />
                </MenuContainerStyled>
            </LinksContainerStyled>
        </NavbarContainerStyled>
    )
}

export default Navbar
