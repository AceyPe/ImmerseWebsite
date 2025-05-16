import React from "react";
import { ContactForm } from "../components/contact/contactform";

export const Contact = () => {

    return (
        <div className="About-Wrapper flex flex-col gap-20 justify-center items-center text-md py-20">
            <div className="About-Text flex flex-col gap-4 px-20 md:px-15">
                <h1 className="font-bold text-4xl text-center uppercase"> Reach out To Us!</h1>
                <h2> We can help you with any problem you are facing or answer any questions</h2>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}