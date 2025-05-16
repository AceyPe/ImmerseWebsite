import { Image } from "@chakra-ui/react";
import AuthButton from "./authbutton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/calma.png"
import { useAuth } from "../contexts/AuthContext";
import navItems from "../assets/json/navbaritems.json"

export const Navbar = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location);
    const { user } = useAuth();


    const handleLinkClick = (path) => {
        setActiveLink(path);
    }

    return (
        <nav className="bg-[#141e46]">
            <section className="navbar lg:grid lg:grid-cols-10 hidden py-8 px-10">
                <div className="logo font-bold rounded text-third text-4xl col-span-2">
                    <Link to="/" onClick={() => handleLinkClick("/")}>
                        <div className="flex gap-2 items-center w-[20rem]">
                            <Image alt="calmaVR" src={img} width={24}  />
                            <div>Calma<span className="text-secondary">VR</span></div>
                        </div>
                    </Link>
                    {/* Logo */}
                </div>

                {/* Menu Items */}
                <div className="menuItems flex text-white justify-center gap-20 items-center uppercase col-span-6">
                    {navItems.filter(item => item.role === "any" || (user && user.role === item.role))
                        .map((item) => ( 
                            <Link to={item.href} onClick={() => handleLinkClick(item.href)} >
                                <div className={`hover:text-white text-xl md:text-lg text-primary flex justify-center rounded-lg hover-underline-animation ${activeLink === item.href ? "active" : ""}`}>
                                    {item.title}
                                </div>
                            </Link>
))}
                </div>

                {/* Login Button */}
                <div className="LoginButton col-span-2 justify-self-end"><AuthButton /></div>

            </section>
        </nav>
    );
}