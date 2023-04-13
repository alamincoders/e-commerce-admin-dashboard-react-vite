import React, {Fragment, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import SideBar from "../components/shared/SideBar";

const Layout = () => {
    return (
        <div>

            <Navbar/>
            <div className="hidden lg:block">
            <SideBar/>
            </div>

            <main
                className='pt-16 transition-all duration-[400ms] bg-gray-50 lg:pl-64'>
                <div className="p-6 "><Outlet/></div>
            </main>
        </div>
    );
};

export default Layout;
