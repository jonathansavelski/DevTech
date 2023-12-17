import Hero from "../../components/Hero/Hero"
import CardsRecomendacion from "../../components/Recomended/CardsRecommended"
import React from 'react'
import Categorias from "../../components/Categories/Categories"
import { Container, RecommendedContainer } from './HomeStyles'
export const Home = () => {
    return (
        <>
            <Hero />
            <RecommendedContainer>
                <CardsRecomendacion />
            </RecommendedContainer>
            <Container>
                <h2>Our categories</h2>
                <Categorias />
            </Container>
        </>
    )
}

export default Home
