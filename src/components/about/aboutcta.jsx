import { SectionButton } from "../shared/sectionbutton"

export const CTAButton = () => {
    return (
        <section className="flex justify-center">
            <SectionButton buttonText={"Inquire with us"} buttonLink={"/contact"}/>
        </section>
    )
}