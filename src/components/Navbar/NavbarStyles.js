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
    form {
        @media (max-width: 768px) {
        display: none;
    }
    }
`

export const LogoImg = styled.img`
    width: 180px;
    margin-top: 10px;
`

export const LinksContainerStyled = styled.div`
    color: black;
    display: flex;
    gap: 1px;
    @media (min-width:1100px) {
        padding-left: 10.5%;
    }
    a {
        color: black;
        padding: 1rem;
        font-weight: 600;
        @media (max-width:900px) {
            padding: 0.5rem;
        }
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
    min-width: 200px;
    height: 100vh;
  }
`

export const Fondo = styled.div`
    display: ${(props) => props.$clicked ? "flex" : "none"};
    position: fixed;
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
`

export const SearchFormStyled = styled.form`
    display: flex;
    gap: 20px;
    position: relative;
    button {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        border: none;
        :hover {
            border: red;
        }
    }
`;

export const SearchBarStyled = styled.input`
    outline: none;
    border: 2px solid var(--violet);
    border-radius: 5px;
    padding: 0.5rem 2.3rem 0.5rem 0.5rem;
    width: 300px;
    @media (max-width:1000px) {
    width: 250px;
    }
    @media (max-width:900px) {
    width: 180px;
    }
    @media (max-width:768px) {
    width: 100%;
    }
`;

export const IconWrapperStyled = styled.div`
    position: absolute;
    top: 7px;
    right: 12px;
    font-size: 1.1rem;
`;

export const IconSearchContainer = styled.div`
    font-size: 1.4rem;
    position: absolute;
    right: 60px;
    margin-bottom: -5px;
    @media (min-width: 768px) {
        display: none;
    }
    cursor: pointer;
`

/* Popup.css */

export const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const PopupContent = styled.div`
    min-width: 60%;
    min-height: 120px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
`

export const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
`