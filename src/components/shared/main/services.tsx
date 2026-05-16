import { Container } from "../container";
import service1 from "@/images/service1.png";
import service2 from "@/images/service2.svg";
import service3 from "@/images/service3.svg";
import service4 from "@/images/service4.svg";
import service5 from "@/images/service5.svg";
import service6 from "@/images/service6.svg";

import Image from "next/image";

import { Button } from "@/components/ui/button";

const services = {
    service1: {
        name: "Adult haircut",
        discription: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
        price: 39,
        image: service1
    },
    service2: {
        name: "Kids Haircut",
        discription: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
        price: 19,
        image: service2
    },
    service3: {
        name: "Beard Trim",
        discription: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
        price: 29,
        image: service3
    },
    service4: {
        name: "Neck Shave",
        discription: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
        price: 39,
        image: service4
    },
    service5: {
        name: "Scalp Moisturizing",
        discription: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
        price: 10,
        image: service5
    },
    service6: {
        name: "Beard Grooming",
        discription: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
        price: 49,
        image: service6
    },
}

export default function BarberDemoServices() {
    return (
        <section className="pb-16 md:pb-28 bg-[#F8F5EF]">
            <Container className="flex flex-col items-center">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-center">
                    Browse our services
                </h2>

                <p className="mt-6 text-base sm:text-lg font-medium text-gray-600 leading-relaxed text-center max-w-2xl">
                    Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis
                    adipiscing egestas purus et mi tempus semper id vel pretium eu magna in senectus sit eget justo.
                </p>

                <div className="mt-12 p-5 md:p-20 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-white">
                    {Object.entries(services).map(([key, service]) => (
                        <div
                            key={key}
                            className="flex gap-5 items-start flex-wrap"
                        >
                            <div className="shrink-0">
                                <Image
                                    className="w-14 h-14 object-contain"
                                    src={service.image}
                                    alt={service.name}
                                />
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-extrabold">
                                    {service.name}
                                </h3>

                                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {service.discription}
                                </p>

                                <span className="block mt-4 text-lg sm:text-xl font-extrabold">
                                    ${service.price} USD
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="cursor-pointer h-14 mt-10 rounded-none border-2 border-[#DEC7A6] bg-[#DEC7A6] px-8 text-sm font-extrabold uppercase text-black duration-300 hover:bg-black hover:text-white sm:text-base">
                    Book an Appointment
                </Button>

            </Container>
        </section>
    );
}