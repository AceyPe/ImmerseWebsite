import { Image } from "@chakra-ui/react";
import calma from '../../assets/images/calma.png'
import React from "react";


export const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10">
            <Image src={calma} className="w-60" />
            <h1 className="text-7xl font-bold text-center">This is <span className="text-third">Calma</span><span className="text-secondary">VR</span></h1>
            <p className="text-2xl text-center">A passion project to help therapists and psychiatrists to cure people with social anxiety<br/>using the immersion of a VR to simulate
            situations that are close to the real world</p>
        </section>
    )
}