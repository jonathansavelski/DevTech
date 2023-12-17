import React from 'react'
import Categorias from '../../components/Categories/Categories';
import { Subheader } from '../../styles/GlobalStyles';

const Categories = () => {
    return (
        <>
            <Subheader>
                <h1>Categories</h1>
            </Subheader>
            <Categorias />
        </>
    )
}

export default Categories
