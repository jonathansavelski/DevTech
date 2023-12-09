import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categories } from '../../data/Categories';
import CardCategory from '../../components/Categories/CardCategory';
import { CategoriesCardContainer, CategoriesContainer } from '../../components/Categories/CategoriesStyles';

const LinkItem = styled(Link)`
  color: #3da9fc;
  border: 1px solid #3da9fc;
  border-radius: 20px;
  padding: 5px 15px;
  transition: all 0.3s ease;

  :hover {
    background: #3da9fc;
    color: #fff;
  }
`;

const Products = () => {
    return (
        <>
            <CategoriesContainer>
                <h1>Categorías</h1>
                <CategoriesCardContainer>
                    {categories?.map(category => (
                        <CardCategory key={category.id} {...category}>
                            {/* <LinkItem to={category.title}>Ver más</LinkItem> */}
                        </CardCategory>
                    ))}
                </CategoriesCardContainer>
            </CategoriesContainer>
        </>
    )
}

export default Products
