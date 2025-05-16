import React from "react";
import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar";
// import Footer from "./footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

