import React from "react"
import { Hero } from '../components/homepage/homeHero'
    
export const HomePage = () => {
    return (
        <section className="px-4 py-20 lg:py-20 lg:px-20 text-white grid lg:flex md:flex-col gap-20">
            <Hero />
        </section>
    )
};