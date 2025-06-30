import { BenefitsCard } from "./benefitscard"
import benefits from "../../assets/json/benefits.json"
import { motion } from "framer-motion"
import { fadeIn, fadeInUp } from "../../lib/animation"
import { SectionButton } from "../shared/sectionbutton"


export const Benefits = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-20 xl:mx-60">
            <div className="z-10 flex flex-col gap-10 items-center">
                <motion.h2 {...fadeIn()} className=" text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-center">Why Choose CalmaVR?</motion.h2>
                <motion.p {...fadeInUp()} className="text-lg md:text-2xl text-textSecondary  text-center">
                    Traditional therapy has limitations in accessibility, repetition, and immersion. CalmaVR enhances mental health treatment using immersive VR, AI, and wearable sensors — all from the comfort of your clinic.
                </motion.p>
            </div>
            <motion.div {...fadeInUp()} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto px-4">
                {benefits.map((benefit) => (
                    <BenefitsCard title={benefit.title} desc={benefit.desc}/>
                ))}
            </motion.div>
            {/* <Button className={"uppercase z-10"} size={"lg"} px={20}>Learn More</Button> */}
            <SectionButton buttonText={"Learn More"} buttonLink={"/about"}/>
        </section>
    )
}