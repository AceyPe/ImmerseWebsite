import { ServicesButton } from "../shared/servicesbutton"

export const ServicesCard = ({ title, desc, buttonText, buttonLink, linkState }) => {
    return (
        <div className="bg-[#2d4087] p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition flex flex-col gap-10 justify-between">
            <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
            <p className="text-[#C5D0F5] text-center">
                {desc}
            </p>
            <ServicesButton buttonText={buttonText} buttonLink={buttonLink} />
        </div>
    )
}