import React from "react"
import AboutImage from '../assets/images/immerse.png'
import { Image } from '@chakra-ui/react'
    
    
export const HomePage = ()=> {
    return (
        <>
            {/* about us */}
            <div className="About-Wrapper flex gap-20 justify-center py-20">
                <div className="About-Image w-[30rem] border-[15px] border-black rounded-full "><Image alt="about-us-image" src={AboutImage} borderRadius={"full"} /></div>
                <div className="About-Text flex flex-col py-16 gap-10">
                    <h1 className="uppercase text-4xl font-bold">Virtual Reality Therapy:<br />Smarter, Faster, and Better</h1>
                    <p>With Immerse, you get the chance to cure one self from dangerous mental illnesses like Social Anxiety,<br/> Clusterphobia etc.</p>
                </div>
            </div>
        </>
    )
};