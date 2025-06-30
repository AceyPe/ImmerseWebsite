import { FaHandshake } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { FaUserLock } from "react-icons/fa";


export const Values = () => {
    return (
        <section className="text-center px-6 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">Our Values</h2>
            <p className="text-lg lg:text-2xl max-w-2xl mx-auto text-[#B0B8D1]">
                These values guide our work, shape our team, and define how we build CalmaVR.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
                <div className="bg-[#2d4087] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <FaHeart size={25} />
                        <h3 className="text-2xl font-semibold mb-2">Empathy</h3>
                    </div>
                    <p className="text-[#C5D0F5]">We design with the patient in mind — creating safe, human-centered experiences.</p>
                </div>
                <div className="bg-[#2d4087] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <HiLightBulb size={30}/>
                        <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                    </div>
                    <p className="text-[#C5D0F5]">We push the boundaries of technology to serve real-world mental health needs.</p>
                </div>
                <div className="bg-[#2d4087] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <FaHandshake size={30}/>                    
                        <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
                    </div>
                    <p className="text-[#C5D0F5]">We work alongside therapists, engineers, and patients to create impactful solutions.</p>
                </div>
                <div className="bg-[#2d4087] p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <FaUserLock size={30}/>
                        <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
                    </div>
                    <p className="text-[#C5D0F5]">
                        We prioritize privacy, data protection, and ethical AI — because mental health deserves complete trust.
                    </p>
                </div>
            </div>
        </section>
    )
}