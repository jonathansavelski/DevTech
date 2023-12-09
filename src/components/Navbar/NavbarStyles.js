import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom';

export const NavbarContainerStyled = styled.div`
    height: 30px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

export const LogoImg = styled.img`
    width: 180px;
    margin-top: 10px;
`

export const LinksContainerStyled = styled.div`
    color: black;

    a {
        color: black;
        padding: 1rem;
        font-weight: 600;
    }

    a:hover {
        color: var(--primary);
    }

    @media (max-width:768px) {
    transform: ${(props) =>
        props.$clicked ? "translateX(0)" : "translateX(100%)"};
    display: flex;
    align-items: center;
    padding-top: 2rem;
    border-left: 5px solid var(--violet);
    flex-direction: column;
    transition: all 0.5s;
    position: absolute;
    top: 3.95rem;
    right: 0;
    background-color: white;
    width: 40%;
    height: 100vh;
  }
`

export const Fondo = styled.div`
    display: ${(props) => props.$clicked ? "flex" : "none"};
    /* opacity: ${(props) => props.$clicked ? "0.5" : "1"}; */
    position: fixed;
    /* top: 3.9rem; */
    height: 100vh;
    width: 100vw;
    opacity: 0.5;
    background-color: black;
`

export const MenuContainerStyled = styled.div`
    display: none;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width:768px) {
        display: flex;
    }
    
`

export const NavLinkStyled = styled(NavLink)`
    color: black;
    padding: 1rem;
    font-weight: 600;
    /* @media (max-width: 768px) {
        display: none;
    } */

`