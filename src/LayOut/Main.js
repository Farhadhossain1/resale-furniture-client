import React from 'react';
import { Outlet } from 'react-router-dom';
import CopyRight from '../Pages/Shared/CopyRight/CopyRight';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <CopyRight></CopyRight>
        </div>
    );
};

export default Main;