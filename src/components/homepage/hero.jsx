import { Button } from "@chakra-ui/react"


export const Hero = () => {
    return (
        <section className=
            {` 
                relative min-h-screen flex flex-col items-center justify-center
                bg-[url(assets/images/VR.jpg)] bg-cover bg-center
                before:content-[''] before:absolute before:inset-0 
                before:bg-blue-800 before:bg-opacity-50
                before:z-10 gap-20`}>

            <div className="z-10 flex flex-col gap-10 mx-64">
                <h1 className="text-7xl font-bold text-center">Transform Your Therapy Sessions</h1>
                <p className="text-2xl text-center">We offer clients a new therapeutic experience using our wearable-enhanced VR system — real-time data, immersive therapy, and AI-powered insights.</p>
            </div>
            <Button className={"uppercase z-10"} size={"lg"} px={20}>Reach out</Button>
        </section>
    )
}