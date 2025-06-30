import { useEffect, useState } from "react";
import { GiBrain } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { RiParentFill } from "react-icons/ri";

export const Summary = ({therapistData}) => {

    const [now, setNow] = useState(new Date());

    const formattedDate = now.toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    


    return (
        <section className="flex flex-col md:gap-40 gap-5 h-full w-full">
            <div className="bg-[#2d4087] p-5 rounded-xl flex lg:flex-row justify-between flex-col gap-5 lg:gap-0">
                <div className="flex flex-col gap-10">
                    <h2 className="font-bold text-3xl md:text-5xl flex items-baseline gap-2"><span className="text-secondary"><GiBrain /></span> Welcome <span className="text-secondary">Dr.{therapistData.therapist[0].name}</span></h2>
                    <p className=" md:text-2xl">in the following you will find the summary for the sessions</p>
                </div>
                <div>
                    <div className="flex justify-end gap-4 ">
                        <h2 className=" md:text-xl">{formattedDate}</h2>
                        <span className="text-secondary"><FaCalendar /></span>
                    </div>
                    <div className="flex justify-end gap-4">
                    <h3>{formattedTime}</h3>
                    <span className="text-secondary"><FaRegClock /></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row justify-center gap-2 md:gap-20">
                <div className="bg-[#2d4087] p-8 rounded-xl flex flex-col gap-5 shadow-md min-w-[300px] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                    <div className="flex gap-2">
                        <span className="text-secondary"><GiNotebook className="text-xl" /></span>
                        <h3 className="uppercase  md:text-xl">sessions:</h3>
                    </div>
                    <p className="font-bold text-lg md:text-3xl text-secondary">8</p>
                    <p className="md:text-lg">Completed</p>
                </div>
            <div className="bg-[#2d4087] p-8 rounded-xl flex flex-col gap-5 shadow-md hover:shadow-xl min-w-[300px] hover:scale-[1.02] transition-all duration-300">
                    <div className="flex  gap-2 ">
                        <IoMdPerson className="text-2xl text-secondary"/>
                        <h3 className="uppercase md:text-2xl">clients:</h3>
                    </div>
                <p className="font-bold text-lg md:text-3xl text-secondary">512</p>
                <p className="md:text-lg">Active</p>
            </div> 
            <div className="bg-[#2d4087] p-8 rounded-xl flex flex-col gap-5 shadow-md hover:shadow-xl min-w-[300px] hover:scale-[1.02] transition-all duration-300">
                    <div className="flex  gap-2 ">
                        <RiParentFill className="text-2xl text-secondary"/>
                        <h3 className="uppercase md:text-2xl"> parent forms:</h3>
                    </div>
                <p className="font-bold text-lg md:text-3xl text-secondary">20</p>
                <p className="md:text-lg">Active</p>
            </div> 
            <div className="bg-[#2d4087] p-8 rounded-xl flex flex-col gap-5 shadow-md hover:shadow-xl min-w-[300px] hover:scale-[1.02] transition-all duration-300">
                    <div className="flex  gap-2 ">
                        <FaWpforms className="text-2xl text-secondary"/>
                        <h3 className="uppercase md:text-2xl"> Patient forms:</h3>
                    </div>
                <p className="font-bold text-lg md:text-3xl text-secondary">10</p>
                <p className="md:text-lg">Active</p>
            </div> 
            </div>
                <div className="bg-[#2d4087] py-2 md:p-5 rounded-xl flex justify-center md:text-xl">
                    <h4>To View More Information about a certain session or a patient Please Click on the menu icon in the top right and click the corresponding button</h4>
                </div>
        </section>
    )
}