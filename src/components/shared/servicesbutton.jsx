import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { fadeInUp } from "../../lib/animation"
import { Link } from "react-router-dom"

export const ServicesButton = ({buttonText, buttonLink}) => {
    return (

        <motion.div {...fadeInUp()} className="flex justify-center w-full">
            <Link to={buttonLink}><Button className={"uppercase"} >{buttonText}</Button></Link>
        </motion.div>
    )
}