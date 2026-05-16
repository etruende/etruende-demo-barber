import { Container } from "../container";
import Image from "next/image";

import licensed from "@/images/licensed.svg";
import masters from "@/images/masters.png";
import trusted from "@/images/trusted.svg";


export default function BarberDemoWhy() {
    return (
        <div className='py-16 md:py-28 bg-[#F8F5EF]'>
            <Container className="flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-center">
                    why choose us
                </h2>

                <p className="mt-6 text-base sm:text-lg font-medium text-gray-600 leading-relaxed text-center max-w-2xl">
                    Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis
                    adipiscing egestas purus et mi tempus semper id vel pretium eu magna in senectus sit eget justo.
                </p>

                <div className="grid grid-cols-1 gap-10 px-6 py-10 sm:px-10 md:grid-cols-3 lg:px-16">
                    <div className="flex flex-col items-center text-center uppercase">
                        <Image src={licensed} alt="Address icon" className="mb-2" />

                        <h3 className="text-xl font-extrabold md:text-2xl">
                            Licensed
                        </h3>

                        <div className="mt-2 mb-3 h-1 w-20 bg-[#DEC7A6]" />

                        <p className="text-sm font-medium md:text-base">
                            Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center uppercase">
                        <Image src={masters} alt="Phone icon" className="mb-2" />

                        <h3 className="text-xl font-extrabold md:text-2xl">
                            Masters
                        </h3>

                        <div className="mt-2 mb-3 h-1 w-20 bg-[#DEC7A6]" />

                        <p className="text-sm font-medium md:text-base">
                            Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center uppercase">
                        <Image src={trusted} alt="Hours icon" className="mb-2" />

                        <h3 className="text-xl font-extrabold md:text-2xl">
                            Trusted
                        </h3>

                        <div className="mt-2 mb-3 h-1 w-20 bg-[#DEC7A6]" />

                        <p className="text-sm font-medium md:text-base">
                            We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}