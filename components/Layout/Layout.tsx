import React from 'react'
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
    children: any;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout