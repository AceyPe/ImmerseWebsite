import {
    Image,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, } from "@chakra-ui/react";
import AuthButton from "./authbutton";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/images/calma.png"
import { useAuth } from "../contexts/AuthContext";
import navItems from "../assets/json/navbaritems.json"
import { IoIosMenu } from "react-icons/io";

export const Navbar = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const activeLink = location.pathname;
    const { user } = useAuth();


    return (
        <>
            <nav className="bg-[#141e46]">
                <section className="navbar xl:grid xl:grid-cols-10 hidden py-8 px-10">
                    <div className="logo font-bold rounded col-span-2">
                        <Link to="/" >
                            <div className="flex gap-2 items-center w-[20rem]">
                                                        {/* Logo */}
                                <Image alt="calmaVR" src={img} width={24}  />
                                <div className="text-4xl text-third">Calma<span className="text-secondary">VR</span></div>
                            </div>
                        </Link>
                        </div>
                    {/* Menu Items */}
                    <div className="menuItems hidden xl:flex text-white justify-center gap-10 items-center uppercase col-span-6">
                        {navItems.filter(item => item.role === "any" || (user && user.role === item.role))
                            .map((item) => ( 
                                <Link to={item.href} >
                                    <div className={`hover:text-white text-xl text-primary flex justify-center rounded-lg hover-underline-animation ${activeLink === item.href ? "active" : ""}`}>
                                        {item.title}
                                    </div>
                                </Link>
    ))}
                    </div>

                    {/* Login Button */}
                    <div className="LoginButton lg:hidden xl:flex col-span-2 justify-self-end"><AuthButton /></div>

            </section>        
            </nav>
            {/* nav for large screens */}
            <nav className="bg-[#141e46]">
                <section className="navbar lg:flex lg:justify-between hidden xl:hidden py-8 px-10">
                    <div className="logo font-bold rounded col-span-2">
                        <Link to="/" >
                            <div className="flex gap-2 items-center w-[20rem]">
                                                        {/* Logo */}
                                <Image alt="calmaVR" src={img} width={24}  />
                                <div className="text-4xl text-third">Calma<span className="text-secondary">VR</span></div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<IoIosMenu  />}
                                variant="outline"
                            />
                            <MenuList className="!bg-[#141e46] space-y-4" placeItems={"center"}>
                            {navItems.filter(item => item.role === "any" || (user && user.role === item.role)).map((element) => (
                                <MenuItem
                                    as="a"
                                    href={element.href}
                                    key={element.id}
                                    className={`
                                        ${
                                        element.href === activeLink
                                            ? "pointer-events-none rounded-none font-bold !bg-secondary"
                                            : ""
                                        } hover:text-white !rounded-md  hover:!ps-6 !transition-all !duration-200 hover:!bg-secondary !bg-[#141e46]`}
                                    >
                                    {element.title}
                                </MenuItem>
                            ))}
                                <MenuItem className="!bg-[#141e46] flex justify-center">
                                    <AuthButton />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
            </section>        
            </nav>         
            {/* Mobile and tablet Nav Menu */}
            <nav
            className={`fixed lg:relative w-full font-display z-50 duration-700`}
        >
            <section
            className={`lg:hidden flex items-center justify-end mx-auto p-4`}
            >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<IoIosMenu  />}
                    bg={"#141e46"}
                    variant="outline"
                />
                <MenuList className="!bg-[#141e46] space-y-4" placeItems={"center"}>
                {navItems.filter(item => item.role === "any" || (user && user.role === item.role)).map((element) => (
                    <MenuItem
                        as="a"
                        href={element.href}
                        key={element.id}
                        className={`
                            ${
                            element.href === activeLink
                                ? "pointer-events-none rounded-none font-bold !bg-secondary"
                                : ""
                            } hover:text-white !rounded-md  hover:!ps-6 !transition-all !duration-200 hover:!bg-secondary !bg-[#141e46]`}
                        >
                        {element.title}
                    </MenuItem>
                ))}
                    <MenuItem className="!bg-[#141e46] flex justify-center">
                        <AuthButton />
                    </MenuItem>
                </MenuList>
            </Menu>
            </section>
        </nav>
    </>
    );
}