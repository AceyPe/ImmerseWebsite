import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { fadeInUp } from "../../lib/animation"
import { Link } from "react-router-dom"

export const SectionButton = ({buttonText, buttonLink}) => {
    return (

        <motion.div {...fadeInUp()}>
            <Link to={buttonLink}><Button className={"uppercase z-10"} size={"lg"} px={20}>{buttonText}</Button></Link>
        </motion.div>
    )
}