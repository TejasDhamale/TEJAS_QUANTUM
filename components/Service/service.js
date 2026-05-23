import ConHeading from "../common-con/con-heading";
import { cards } from "@/data/services-data";
import ServiceCard from "./service-cards/card";

function Services() {

    return (
        <section id="services" className="w-full py-20">

            <div className="max-w-[85rem] mx-auto px-4 md:px-8 flex flex-col gap-y-16">
                <ConHeading
                    text="Our Services"
                    desc="Delivering cutting-edge Artificial Intelligence and Software solutions tailored to scale and innovate."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cards.map((card, idx) => (
                        <ServiceCard key={idx} card={card} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;