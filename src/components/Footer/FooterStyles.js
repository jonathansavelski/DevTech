import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: var(--violet);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10.5%;
    hr {
        width: 100%;
        margin: 0;
    }
    p {
        color: white;
        font-size: 18px;
    }
    @media (max-width: 768px) {

    }
`

export const SocialContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 200px;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
`

export const Social = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 2rem;
    color: white;
    svg {
        cursor: pointer;
        :hover {
            color: var(--secondary);
        }
    }
`

export const MenuContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
    gap: 4rem;
    padding: 1rem 0;
    @media (max-width: 576px) {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    a{
        color: white;
        font-weight: 400;
    }
    h4 {
        color: white;
        padding: 0;
        margin: 0 0 0.5rem 0;
        font-weight: 700;
    }
`

export const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    a, p{
        color: white;
        font-size: 14px;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        text-align: center;
        margin-top: 1rem;
    }
`