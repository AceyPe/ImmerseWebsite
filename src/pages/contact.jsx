import { ContactForm } from "../components/contact/contactform";
import { motion } from 'framer-motion';
import { fadeInRight, fadeInLeft } from "../lib/animation";


export const Contact = () => {

    return (
        <section className="flex justify-center items-center w-full h-full my-10">
            <div className="flex flex-col lg:flex-row bg-[#2d4087] px-8 md:px-20 py-12 my-2 rounded-xl shadow-md  gap-8 items-center justify-center max-w-[700px] md:max-w-[1200px]">
                <motion.div {...fadeInLeft()} className="About-Text flex flex-col gap-4 px-20 lg:px-12 text-center md:text-start">
                    <h1 className="font-bold md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-start uppercase"> Reach out To Us!</h1>
                    <h2> We can help you with any problem you are facing, answer any questions or add special requests</h2>
                </motion.div>
                <motion.div {...fadeInRight()}>
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    )
}