import React from 'react';
import { Link } from 'react-router-dom';

import {
    ProductsCard,
    CardContainer,
    LevelContainer,
} from './ProductsStyles';

import BeginnerImg from '../../../public/assets/Levels/Beginner.png'
import IntermediateImg from '../../../public/assets/Levels/Intermediate.png'
import AdvancedImg from '../../../public/assets/Levels/Advanced.png'
import { discountedPercent } from '../../utils/DiscountedPercent';

const CardProduct = ({ title, desc, price, duration, level }) => {

    // Calcular el precio con descuento del 20%
    const discountedPrice = (price * (1 - discountedPercent)).toFixed(2);

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
            <Link to={title}>
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
            </Link>
        </CardContainer>
    );
};

export default CardProduct;