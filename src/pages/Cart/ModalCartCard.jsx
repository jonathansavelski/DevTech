import React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/FormatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import {
    ProductContainerStyled,
    TextContainerStyled,
    CardTitleStyled,
    TextStyled,
    PriceStyled,
    QuantityContainerStyled,
} from './ModalCartStyles';

import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

const ModalCartCard = ({ title, desc, price, quantity, id }) => {
    const dispatch = useDispatch();

    return (
        <ProductContainerStyled>
            <TextContainerStyled>
                <CardTitleStyled>{title}</CardTitleStyled>
                <TextStyled>{desc}</TextStyled>
                <PriceStyled>{formatPrice(price)}</PriceStyled>
            </TextContainerStyled>
            <QuantityContainerStyled>
                <button
                    onClick={() => dispatch(removeFromCart(id))}
                >
                    {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
                </button>
                <span>{quantity}</span>
                <button
                    onClick={() =>
                        dispatch(addToCart({ title, desc, price, id }))
                    }
                >
                    <BsPlusLg />
                </button>
            </QuantityContainerStyled>
        </ProductContainerStyled>
    );
};

export default ModalCartCard;