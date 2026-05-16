import { Container } from "../container";
import Image from "next/image";
import img from "@/images/firstBlockImage.png";

export default function BarberDemoFirstBlock() {
    return (
        <section className="pt-170 md:pt-60 pb-15 md:pb-37.5 bg-[#F8F5EF]">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="w-full md:max-w-xl">
                        <h2 className="uppercase font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                            Your personal barber service at your home
                        </h2>

                        <p className="mt-5 text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                            Nulla egestas sapien integer mi fermentum tellus tristique consequat
                            pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
                            pretium eu magna in senectus sit eget justo.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-12">
                            <div>
                                <span className="font-extrabold text-4xl sm:text-5xl">
                                    99 <span className="text-[#DEC7A6]">%</span>
                                </span>
                                <p className="text-sm sm:text-base uppercase font-extrabold mt-2 max-w-40">
                                    Customer Satisfaction
                                </p>
                            </div>

                            <div>
                                <span className="font-extrabold text-4xl sm:text-5xl">
                                    10 <span className="text-[#DEC7A6]">+</span>
                                </span>
                                <p className="text-sm sm:text-base uppercase font-extrabold mt-2 max-w-40">
                                    Years of experience
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <Image
                            src={img}
                            alt="Barbershop demo landing page first picture"
                            className="w-full max-w-md md:max-w-lg h-auto object-contain"
                            priority
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
}