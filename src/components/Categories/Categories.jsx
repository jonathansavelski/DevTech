import React from 'react';
import { useSelector } from 'react-redux';
import CardCategory from '../../components/Categories/CardCategory';
import { CategoriesCardContainer, CategoriesContainer } from '../../components/Categories/CategoriesStyles';

export const Categorias = () => {
    const categories = useSelector(state => state.categories.categories);

    return (
        <CategoriesContainer>
            <CategoriesCardContainer>
                {categories?.map(category => (
                    <CardCategory key={category.id} {...category}>
                    </CardCategory>
                ))}
            </CategoriesCardContainer>
        </CategoriesContainer>
    );
};

export default Categorias;