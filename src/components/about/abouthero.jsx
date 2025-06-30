// import { SectionButton } from "../../components/shared/sectionbutton"
import { motion } from "framer-motion"
import { fadeInUp } from "../../lib/animation"
import { fadeIn } from "../../lib/animation"

export const Hero = () => {

    return (
        <section className=
        {` 
            relative min-h-screen flex flex-col justify-center
            bg-[url(assets/images/vrsketch.svg)] bg-cover bg-center
            before:content-[''] before:absolute before:inset-0 
            before:bg-blue-800 before:bg-opacity-70
            gap-20`}>

            <div className="mx-6 md:mx-20 flex flex-col gap-20">
                <div className="flex flex-col gap-10 max-w-[920px] z-10">
                    <motion.h1 {...fadeIn()} className=" text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">Redefining Mental Health Through Technology</motion.h1>
                    <motion.p {...fadeInUp()} className="text-lg md:text-2xl">empowering therapists and patients with immersive, data-driven therapy using VR, AI, and biosensors — designed to make treatment more accessible, effective, and personal.</motion.p>
                </div>
            </div>
    </section>
    )
}