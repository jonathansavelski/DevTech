import React from 'react'
import { useSelector } from 'react-redux'
import { ProductsContainer, ProductsCardContainer } from './ProductsStyles'
import CardProduct from './CardProduct'

const Products = () => {

    let products = useSelector(state => state.products.products)

    return (
        <ProductsContainer id="products">
            <ProductsCardContainer>
                {Object.entries(products).map(([, courses]) =>
                    courses.map(course => {
                        return <CardProduct key={course.id} {...course} />;
                    })
                )}
            </ProductsCardContainer>
        </ProductsContainer>
    )
}

export default Products
