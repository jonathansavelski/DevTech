import styled from "styled-components";

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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    a {
        color: black;
        padding: 1rem;
        font-weight: 600;
        @media (max-width: 768px) {
            display: none;
        }
    }

    a:hover {
        color: var(--primary);
    }
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