import React from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
    const { product } = useParams();
    return (
        <div>
            <h2>{product}</h2>
        </div>
    );
};

export default Product;
