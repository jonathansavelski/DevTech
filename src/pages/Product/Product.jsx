import React from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
    const { products } = useParams();
    return (
        <div>
            <h2>{products}</h2>
        </div>
    );
};

export default Product;
