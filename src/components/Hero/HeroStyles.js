import styled from "styled-components";

export const ContainerStyled = styled.div`
    height: calc(100vh - 60px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1rem solid var(--secondary);
    padding: 0 2rem;
    @media (max-width: 576px) {
    h1 {
        font-size: 42px;
    }
    }
`

export const Video = styled.video`
    position: absolute; 
    top: 0; left:0;
    height: calc(100vh - 60px);
    width: 100%;
    z-index: -1;
    object-fit: cover;
    opacity: 80% black;
`

export const TypingText = styled.h1`
    text-align: center;
    font-size: 4em;
    color: #fff;
    display: inline-block;
    margin-top: 10rem;
    @media (max-width: 768px) {
            font-size: 3rem;
            br {
                display: none;
            }
        }
`

export const SubContainer = styled.div`
    color: white;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PartnershipContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem; 
    row-gap: 0rem;
    img {
        width: 130px;
    }
    flex-wrap: wrap;
    @media (max-width: 576px) {
        img {
        width: 100px;
    }
    }
`

export const ArrowContainer = styled.div`
    color: white;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;

`