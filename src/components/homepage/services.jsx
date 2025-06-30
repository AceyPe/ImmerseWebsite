
import { ServicesCard } from "./servicesCard"
import services from "../../assets/json/services.json"
import { motion } from "framer-motion"
import { fadeIn,fadeInUp } from "../../lib/animation"

export const Services = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-20 xl:mx-60">
            <div className="z-10 flex flex-col gap-10 items-center">
                <motion.h2 {...fadeIn()} className=" text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-center">Our Services</motion.h2>
                <p className="text-lg text-textSecondary  text-center">
                    Choose the option that fits your clinic or personal practice. We offer flexible packages to help you integrate immersive therapy into your workflow.
                </p>
            </div>

            <motion.div {...fadeInUp()} className="grid grid-cols-1 max-w-lg lg:max-w-6xl lg:grid-cols-3 gap-8 mx-auto px-4">
                        {services.map((service) => (
                            <ServicesCard title={service.title} desc={service.desc} buttonText={service.buttonTitle} buttonLink={service.buttonLink} />
                        ))}
            </motion.div>
    </section>
    )
}

// removed service {
//         "title":"🛠️ Maintenance Services",
//         "desc" :"Hardware and software maintenance to keep your therapy sessions running smoothly.",
//         "buttonTitle" :"Subscribe"
//     },