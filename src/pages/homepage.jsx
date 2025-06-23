import React from "react"
import { Hero } from '../components/homepage/hero'
import { Benefits } from "../components/homepage/benefits";
    
export const HomePage = () => {
    return (
        <section className="spac-y-20 w-full text-white grid lg:flex md:flex-col gap-20">
            <Hero />
            <Benefits />
        </section>
    )
};