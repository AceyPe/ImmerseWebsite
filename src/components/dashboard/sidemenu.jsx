import { Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineMenuOpen } from "react-icons/md";
import {
    Button,
    VStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react'
import img from "../../assets/images/calma.png"

export const SideMenu = ({setView}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <nav>
            <IoIosMenu className="size-10 hover:cursor-pointer text-secondary rounded-xl" onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
            <DrawerOverlay />
            <DrawerContent className="" bgColor={"#141e46"}>
                    <DrawerHeader fontSize={'2xl'} className="flex justify-between my-10">
                        Therapist Panel
                    <MdOutlineMenuOpen className="hover:cursor-pointer size-8" onClick={onClose} />
                    </DrawerHeader>
                <DrawerBody bgColor={"#141e46"}>
                    <section className="flex flex-col h-full gap-4 justify-between">
                        <VStack align="stretch" spacing={10}>    
                            <div className="logo font-bold rounded text-third text-2xl ">
                                <Link to="/">
                                    <div className="flex gap-2 items-center justify-center">
                                        <Image alt="calmaVR" src={img} width={20}  />
                                        <div>Calma<span className="text-secondary">VR</span></div>
                                    </div>
                                </Link>
                            </div>
                            <Button onClick={() => {
                                setView("patients")
                                onClose();
                                }
                            }>
                                Patients
                            </Button>
                            <Button onClick={() => {
                                setView("fearform")
                                onClose();
                                }
                            }>
                                Patients' Feedback
                            </Button>
                            <Button onClick={() => {
                                setView("parents");
                                onClose();
                            }}>
                                Parents' Feedback
                            </Button>
                            <Button onClick={() => {
                                setView("sessions");
                                onClose();
                            }
                            
                            }>
                                Sessions Summary
                            </Button>
                        </VStack>
                    
                        <Link to={"/"}>
                            <Button className="w-full">
                                Back to Home
                            </Button>
                        </Link>
                    </section>
                </DrawerBody>
                <DrawerFooter bgColor={"#141e46"}>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        </nav>
    );
}