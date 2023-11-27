import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const LayoutStyled = styled.div`
    padding-top: 60px;
    min-height: calc(100vh - 60px);
`

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <LayoutStyled>{children}</LayoutStyled>
            <Footer />
        </>
    );
};

export default Layout;
