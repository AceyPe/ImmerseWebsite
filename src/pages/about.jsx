import React from "react";
import AboutImage from '../assets/images/report.png'
import { Image } from '@chakra-ui/react'


export const About = () => {

    return (
        <div className="About-Wrapper flex flex-col gap-20 justify-center items-center text-md py-20">
            <div className="About-Image"><Image alt="about-us-image" src={AboutImage} className=" px-5 md:px-10" /></div>
            <div className="About-Text flex flex-col gap-4 px-10 md:px-15">
                <h1 className="uppercase text-lg md:text-2xl lg:text-4xl font-bold">Why We do this?</h1>
                <p>In 2022, there were more than 5 million people in Canada who were experiencing significant symptoms of mental illness.
                    Ellen Stephenson.</p>
                <p>On a global level, it was reported that higher rates of social anxiety symptoms and the prevalence of those meeting the threshold for social anxiety disorder than have been reported previously.
                    The findings suggest that levels of social anxiety may be rising among young people, and that those aged 18–24 may be most at risk. </p>
                <p>Virtual Reality has emerged as an eﬀective tool to assist in the treatment of diﬀerent types of mental disorders. It has the strongest evidence supporting its use in exposure therapy for patients with anxiety disorders caused by speciﬁc phobias. CalmaVR has many distinct characteristics which makes it stand out among other VRET applications.
                </p>
            </div>
            <div>
            </div>
        </div>
    )
}