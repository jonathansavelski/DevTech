import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/Products';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductsContainer, ProductsCardContainer } from '../../components/Products/ProductsStyles'
import CardProduct from '../../components/Products/CardProduct'


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

const Products = (props) => {
    const { category } = useParams();

    return (
        <>
            <ProductsContainer id="products">
                <h1>{category} courses</h1>
                <ProductsCardContainer>
                    {products
                        .filter(course => course.category === category)
                        .map(course => (
                            <CardProduct key={course.id} {...course} >
                                {/* <LinkItem to={product.title}>Ver más</LinkItem> */}
                            </CardProduct>
                        ))}
                </ProductsCardContainer>
            </ProductsContainer>
        </>
    );
};

export default Products;


