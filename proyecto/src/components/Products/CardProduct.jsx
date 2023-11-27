import React from 'react';

import {
    ProductsCard,
    CardContainer,
    LevelContainer,
} from './ProductsStyles';

import BeginnerImg from '../../assets/Levels/Beginner.png'
import IntermediateImg from '../../assets/Levels/Intermediate.png'
import AdvancedImg from '../../assets/Levels/Advanced.png'

const CardProduct = ({ title, desc, price, duration, level }) => {

    // Calcular el precio con descuento del 20%
    const discountedPrice = (price * 0.8).toFixed(2);

    const levelImage = (level) => {
        if (level === 'Beginner') {
            return BeginnerImg;
        }
        else if (level === 'Intermediate') {
            return IntermediateImg;
        }
        else {
            return AdvancedImg;
        }
    };

    return (
        <CardContainer>
            <ProductsCard>
                <h3>{title}</h3>
                <p>{desc}</p>
                <hr />
                <span><del>${price}</del> ${discountedPrice}</span>
                <p><b>Duration: </b>{duration}</p>
                <hr />
                <LevelContainer>
                    <img src={levelImage(level)} alt="" />
                    <p><b>LEVEL: </b>{level}</p>
                </LevelContainer>
            </ProductsCard>
        </CardContainer>
    );
};

export default CardProduct;