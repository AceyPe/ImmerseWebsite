import { Hero } from '../../components/homepage/hero'
import { Benefits } from "../../components/homepage/benefits";
import { Services } from "../../components/homepage/services";
    
export const HomePage = () => {
    return (
        <section className="space-y-40 w-full grid lg:flex md:flex-col pb-20">
            <Hero />
            <Benefits />
            <Services />
        </section>
    )
};