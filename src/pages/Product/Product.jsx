import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { product } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const { title, desc, price, id } = location.state || {};

    const handleAddToCart = () => {
        dispatch(addToCart({ title, desc, price, id }));
        navigate('/cart'); // Redirigir a la página "/cart"
    };

    return (
        <div>
            <h2>{product}</h2>
            <button onClick={handleAddToCart}>course registration</button>
        </div>
    );
};

export default Product;
