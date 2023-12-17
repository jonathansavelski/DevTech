import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsContainer, ProductsCardContainer } from '../Products/ProductsStyles'
import CardProduct from '../Products/CardProduct'

const CardsRecomendacion = () => {
    const recommended = useSelector(state => state.recommended.recommended);

    return (
        <ProductsContainer id="recommended">
            <h2>Recommended courses</h2>
            <ProductsCardContainer gridlength={recommended.length}>
                {recommended.map(recomendado => (
                    <CardProduct key={recomendado.id} {...recomendado} />
                ))}
            </ProductsCardContainer>
        </ProductsContainer>
    );
};

export default CardsRecomendacion;