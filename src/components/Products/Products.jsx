import React from 'react'
import { ProductsContainer, ProductsCardContainer } from './ProductsStyles'
import { products } from '../../data/Products'
import CardProduct from './CardProduct'

const Products = () => {
    return (
        <ProductsContainer id="products">
            <h2>High-demanded courses</h2>
            <ProductsCardContainer>
                {products
                    .filter(course => course.id === 1 || course.id === 2 || course.id === 3)
                    .map(course => <CardProduct key={course.id} {...course} />)
                }
            </ProductsCardContainer>
        </ProductsContainer>
    )
}

export default Products
