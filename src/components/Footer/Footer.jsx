import React from 'react'
import { FooterContainer, SocialContainer, Social, MenuContainer, Menu, Copyright } from './FooterStyles'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../../../public/assets/Logo-blanco.png';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialContainer>
                <img src={Logo} alt="" />
                <Social>
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsFacebook />
                </Social>
            </SocialContainer>
            <hr />
            <MenuContainer>
                <Menu>
                    <h4>About us</h4>
                    <li><a href="">Benefits</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Frequent questions</a></li>
                </Menu>
                <Menu>
                    <h4>Students</h4>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Webinars</a></li>
                    <li><a href="">Experiencies</a></li>
                </Menu>
                <Menu>
                    <h4>Corporative</h4>
                    <li><a href="">Bussiness</a></li>
                    <li><a href="">Agreements</a></li>
                </Menu>
            </MenuContainer>
            <hr />
            <p>Need help? +1 1111 1111</p>
            <hr />
            <Copyright>
                <a href="">Términos y Condiciones</a>
                <p>DevTech Academy © 2023</p>
            </Copyright>
        </FooterContainer>
    )
}

export default Footer


