import React, { useEffect } from 'react';
import { ContainerStyled, Video, TypingText, SubContainer, PartnershipContainer, ArrowContainer } from './HeroStyles';
import video from '../../../public/assets/Video-hero.mp4';
import { IoIosArrowDown } from "react-icons/io";
import Globant from '../../../public/assets/Partnership/imagotype-globant-gray.svg'
import MercadoLibre from '../../../public/assets/Partnership/imagotype-mercado-libre-gray.svg'
import Accenture from '../../../public/assets/Partnership/isologotype-accenture-gray.svg'
import Disney from '../../../public/assets/Partnership/logotype-disney-gray.svg'
import Greenpeace from '../../../public/assets/Partnership/logotype-greenpeace-gray.svg'


const Hero = () => {
    useEffect(() => {
        const successText = "Success";
        const typingDelay = 200; // Milisegundos entre cada letra

        successText.split('').forEach((letter, index) => {
            setTimeout(() => {
                document.getElementById('success-text').innerHTML += letter;
            }, index * typingDelay);
        });
    }, []);

    return (
        <ContainerStyled>
            <div>
                <Video loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                </Video>
                <TypingText id="success-text">Unlock your Code to <br /></TypingText>
            </div>
            <SubContainer>
                <p>Partnerships</p>
                <PartnershipContainer>
                    <img src={Globant} alt="Globant" />
                    <img src={MercadoLibre} alt="MercadoLibre" />
                    <img src={Disney} alt="Disney" />
                    <img src={Greenpeace} alt="Greenpeace" />
                    <img src={Accenture} alt="Accenture" />
                </PartnershipContainer>
                <ArrowContainer>
                    <a href="#products"><IoIosArrowDown /></a>
                </ArrowContainer>
            </SubContainer>
        </ContainerStyled>
    );
};

export default Hero;
