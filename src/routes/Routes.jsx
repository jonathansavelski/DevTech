import React from 'react'

import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from 'react-router-dom';


import Layout from '../components/Layout/Layout';

//Pages
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Categories from '../pages/Categories/Categories';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
// import User from '../pages/User/User';
// import { Login } from "../pages/Login/Login";

//Context
import { useContext } from 'react';
//import Products from '../components/Products/Products';

//import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
//import AuthContext, { AuthProvider } from '../context/AuthContext';


export const Routes = () => {
    //const isAuth = useContext(AuthContext);
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
            <Layout>
                <ReactDomRoutes>

                    <Route path='/' element={<Home />} />

                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />

                    {/* Ruta anidada */}
                    <Route path='categories'>
                        <Route index element={<Categories />} />
                        <Route path=':category'>
                            <Route index element={<Products />} />
                            <Route path=':products' element={<Product />} />
                        </Route>
                    </Route>
                    <Route path='*' element={<Error />} />
                </ReactDomRoutes>
            </Layout>
            {/* </AuthProvider> */}
        </BrowserRouter>
    )
}

export default Routes