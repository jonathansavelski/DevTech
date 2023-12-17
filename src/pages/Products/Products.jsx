import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/Products';
import { ProductsContainer, ProductsCardContainer } from '../../components/Products/ProductsStyles'
import CardProduct from '../../components/Products/CardProduct'
import { Subheader } from '../../styles/GlobalStyles';

const Products = (props) => {
    const { category } = useParams();

    return (
        <>
            <ProductsContainer id="products">
                <Subheader>
                    <h1>{category} courses</h1>
                </Subheader>

                <ProductsCardContainer>
                    {products
                        .filter(course => course.category === category)
                        .map(course => (
                            <CardProduct key={course.id} {...course} >
                            </CardProduct>
                        ))}
                </ProductsCardContainer>
            </ProductsContainer>
        </>
    );
};

export default Products;


