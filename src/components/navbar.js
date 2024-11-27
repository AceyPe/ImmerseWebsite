import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export const NavBar  = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location);
    

    const handleLinkClick = (path) => {
        setActiveLink(path);
    }
    
    return (
        <nav className="navbar flex items-center justify-around px-24 py-8">
            <div className="logo font-bold rounded text-primary [#161c75] text-5xl uppercase">
            {/* Logo */}
                <Link to="/" onClick={() => handleLinkClick("/")}>Immerse</Link>
            </div>

            {/* Menu Items */}
            <div className="menuItems flex gap-20 text-gray-800 justify-center w-screen uppercase">
                <Link to="/" onClick={() => handleLinkClick("/")} ><div className={`hover:text-white text-xl text-primary flex p-4 justify-center rounded-lg hover-underline-animation ${activeLink === "/"? "active" : ""}`}>Home</div></Link>
                <Link to="/parentfeedback" onClick={() => handleLinkClick("/parentfeedback")}><div className={`hover:text-white text-xl text-primary flex p-4 justify-center rounded-lg hover-underline-animation ${activeLink === "/parentfeedback" ? "active" : ""}`}>Parent's Feedback</div></Link>    
                <Link to="/fearanalysis" onClick={() => handleLinkClick("/fearanalysis")}><div className={`hover:text-white text-xl text-primary flex p-4 justify-center rounded-lg hover-underline-animation ${activeLink === "/fearanalysis"? "active" : ""}`}>Fear Analysis</div></Link>
            </div>

            {/* Login */}
            <div className="LoginButton"><Link to={"/signin"}><Button colorScheme="softGreen" size={"lg"} borderRadius={"full"}>Sign in</Button></Link></div>
        </nav>
    );
}