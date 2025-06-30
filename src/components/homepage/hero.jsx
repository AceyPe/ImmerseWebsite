import { motion } from "framer-motion"
import { fadeIn, fadeInUp } from "../../lib/animation"
import { SectionButton } from "../shared/sectionbutton"


export const Hero = () => {
    return (
        <section className=
            {` 
                relative min-h-screen flex flex-col items-center justify-center
                bg-[url(assets/images/VR.jpg)] bg-cover bg-center
                before:content-[''] before:absolute before:inset-0 
                before:bg-blue-800 before:bg-opacity-50
                gap-20`}>

            <div className="z-10 flex flex-col gap-10 md:mx-64 lg:mx-52">
                <motion.h1 {...fadeIn()} className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-center">Transform Your Therapy Sessions</motion.h1>
                <motion.p {...fadeInUp()} className="text-lg md:text-2xl text-center">We offer clients a new therapeutic experience using our wearable-enhanced VR system — real-time data, immersive therapy, and AI-powered insights.</motion.p>
            </div>
            <SectionButton buttonText={"Reach Out"} buttonLink={"/contact"}/>
        </section>
    )
}