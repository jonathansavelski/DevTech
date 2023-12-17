import React from 'react';
import { useLocation } from 'react-router-dom';
import CardProduct from '../../components/Products/CardProduct';
import { ProductsCardContainer, ProductsContainer, NoResults } from '../../components/Products/ProductsStyles';
import { Subheader } from '../../styles/GlobalStyles';

const SearchResults = ({ }) => {
    const location = useLocation();
    const { searchQuery, results } = location.state || {};

    if (!results) {
        return (
            <ProductsContainer >
                <NoResults>There was no course found with the term '{searchQuery}'.</NoResults>
            </ProductsContainer>
        )
    }

    else {
        return (
            <ProductsContainer >
                <Subheader>
                    <h1> {results.length} Search Results for '{searchQuery}'</h1>
                </Subheader>
                <ProductsCardContainer>
                    {results.map((result) => (
                        <CardProduct key={result.id} {...result} >
                        </CardProduct>
                    ))}
                </ProductsCardContainer>
            </ProductsContainer>
        );
    }
};

export default SearchResults;
