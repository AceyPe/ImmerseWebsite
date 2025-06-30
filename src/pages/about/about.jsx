import { Hero } from "../../components/about/abouthero"
import { Mission } from "../../components/about/aboutmission"
import { Story } from "../../components/about/aboutstory"
import { Values } from "../../components/about/aboutvalues"
import { CTAButton } from "../../components/about/aboutcta"

export const About = () => {

    return (
        <section className="space-y-40 pb-20">
            <Hero />
            <Mission />
            <Story />
            <Values />
            <CTAButton />
        </section>
    )
}