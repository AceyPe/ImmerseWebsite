import { Button } from "@chakra-ui/react"
import { BenefitsCard } from "./benefitscard"
import benefits from "../..//assets/json/benefits.json"


export const Benefits = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-20 mx-60 py-20">
            <div className="z-10 flex flex-col gap-10 items-center">
                <h1 className="text-7xl font-bold text-center">Why Choose CalmaVR?</h1>
                <p className="text-lg text-textSecondary  text-center">
                    Traditional therapy has limitations in accessibility, repetition, and immersion. CalmaVR enhances mental health treatment using immersive VR, AI, and wearable sensors — all from the comfort of your clinic.
                </p>
                <p className="text-2xl text-center"></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {benefits.map((benefit) => (
                    <BenefitsCard title={benefit.title} desc={benefit.desc}/>
                ))}
            </div>
            <Button className={"uppercase z-10"} size={"lg"} px={20}>Reach out</Button>
        </section>
    )
}