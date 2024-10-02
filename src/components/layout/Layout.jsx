import React from 'react';
import styles from './Layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
// import Outlet from '../../';
// import Outlet from '../footer/Footer's;

const Layout = () => {
    return (
        <div className = {styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


export default Layout;