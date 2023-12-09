import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom';

const LayoutStyled = styled.div`
    padding-top: 60px;
    min-height: calc(100vh - 60px);
`

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <LayoutStyled>{children}</LayoutStyled>
            <Footer />
        </>
    );
};

export default Layout;
