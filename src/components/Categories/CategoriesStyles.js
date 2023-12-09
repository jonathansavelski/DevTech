import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    h1 {
        text-align: center;
        margin-top: 0;
		font-size: 2.5rem;	
    }
`

export const CategoriesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
	place-items: center;
	justify-content: center;
	row-gap: 2.5rem;
	max-width: 1200px;
	padding: 1rem 0;
    flex-wrap: wrap;
    @media (max-width: 1250px) {
		grid-template-columns: repeat(2, 1fr);
	}
    @media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const CategoryCard = styled.div`
	display: flex;
	gap: 2rem;
    border: 2px solid var(--violet);
    border-top: 12px solid var(--violet);
    max-width: 200px;
    padding: 1rem 1rem 0 1rem;
    img {
		width: 100%;
		margin-bottom: 1rem;
	}
	h3 {
		font-weight: 700;
		margin: 0;
	}
    hr {
        background-color: var(--violet);
    }
	p {
		font-size: 1rem;
	}
	img {
		width: 50px;
	}
	@media (max-width: 900px) {
		width: 270px;
	}
`

export const CardContainer = styled.div`
    &:hover ${CategoryCard} {
        padding: 1rem 0.9rem 0 0.9rem;
        border: 3.5px solid var(--violet);
        border-top: 12px solid var(--violet);
        cursor: pointer;
    }
`;
