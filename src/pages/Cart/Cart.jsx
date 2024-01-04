import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../utils/FormatPrice';

import ModalCartCard from './ModalCartCard';

import {
    ButtonContainerStyled,
    MainContainerStyled,
    PriceContainerStyled,
    PriceStyled,
    ProductsWrapperStyled,
    SubtotalStyled,
    TitleStyled,
    TotalStyled,
} from './ModalCartStyles';

import { clearCart } from '../../redux/cart/cartSlice';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
    }, 0);

    return (
        <>
            <div>
                {(
                    <>
                        <MainContainerStyled>
                            <TitleStyled>
                                <h1>Tus Productos</h1>
                                <button
                                    onClick={() => dispatch(clearCart())}
                                    disabled={!cartItems.length}
                                >
                                    <IoMdTrash />
                                </button>
                            </TitleStyled>

                            <ProductsWrapperStyled>
                                {cartItems.length ? (
                                    cartItems.map(item => (
                                        <ModalCartCard key={item.id} {...item} />
                                    ))
                                ) : (
                                    <p>Your cart is empty</p>
                                )}
                                {console.log(cartItems)}
                            </ProductsWrapperStyled>
                        </MainContainerStyled>

                        <PriceContainerStyled>
                            <SubtotalStyled>
                                <p>Subtotal:</p>
                                <span>{formatPrice(totalPrice)}</span>
                            </SubtotalStyled>
                            <hr />
                            <TotalStyled>
                                <p>Total:</p>
                                <PriceStyled>
                                    {formatPrice(totalPrice)}
                                </PriceStyled>
                            </TotalStyled>
                            <ButtonContainerStyled>
                                <button
                                    onClick={() => {
                                        navigate('/checkout');
                                    }}
                                    disabled={!cartItems.length}
                                >
                                    Iniciar pedido
                                </button>
                            </ButtonContainerStyled>
                        </PriceContainerStyled>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;