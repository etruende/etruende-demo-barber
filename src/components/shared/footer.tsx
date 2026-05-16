import footerBg from "@/images/footerBg.png"
import { Container } from "./container";

import { Button } from "../ui/button";

import Image from "next/image";

import phone from "@/images/footerPhone.svg"
import email from "@/images/footerEmail.svg"

export default function BarberDemoFooter() {
    return (
        <section
            className="bg-cover bg-no-repeat text-white py-20"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5)),
                    url(${footerBg.src})
                `,
            }}
        >
            <Container className="flex items-center justify-between flex-wrap gap-y-10">
                <div className="max-w-123.25">
                    <h2 className="select-none text-3xl md:text-5xl font-black leading-tight uppercase ">
                        make an appointment
                    </h2>

                    <p className="mt-5 font-medium">
                        Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo
                    </p>

                    <div className="mt-10 select-none">
                        <div className="flex gap-10">
                            <Image src={phone} alt="Barbershop footer phone ico" />
                            <div>
                                <h4 className="font-extrabold mb-2 uppercase">
                                    Give us a Call
                                </h4>
                                <span className="block text-[20px]">
                                    (475) 453 - 3465
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-10 mt-10">
                            <Image src={email} alt="Barbershop footer email ico" />
                            <div>
                                <h4 className="font-extrabold mb-2 uppercase">
                                    Send us an email
                                </h4>
                                <span className="block text-[20px]">
                                    hello@example.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="bg-white p-10 text-black flex flex-col gap-8 max-w-150 w-full select-none">
                        <div className="w-full max-w-xl">
                            <label
                                htmlFor="full_name"
                                className="block font-black uppercase tracking-wide text-black select-none"
                            >
                                Full Name
                            </label>

                            <input
                                id="full_name"
                                type="text"
                                className="w-full border-0 border-b-4 border-black bg-transparent p-0.5 text-xl focus:outline-none focus:ring-0"
                            />
                        </div>

                        <div className="w-full max-w-xl">
                            <label
                                htmlFor="subject"
                                className="block font-black uppercase tracking-wide text-black select-none"
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                type="text"
                                className="w-full border-0 border-b-4 border-black bg-transparent p-0.5 text-xl focus:outline-none focus:ring-0"
                            />
                        </div>

                        <div className="flex gap-5">
                            <div className="w-full max-w-xl">
                                <label
                                    htmlFor="phone"
                                    className="block font-black uppercase tracking-wide text-black select-none"
                                >
                                    Phone number
                                </label>

                                <input
                                    id="phone"
                                    type="tel"
                                    className="w-full border-0 border-b-4 border-black bg-transparent p-0.5 text-xl focus:outline-none focus:ring-0"
                                />
                            </div>

                            <div className="w-full max-w-xl">
                                <label
                                    htmlFor="email"
                                    className="block font-black uppercase tracking-wide text-black select-none"
                                >
                                    email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    className="w-full border-0 border-b-4 border-black bg-transparent p-0.5 text-xl focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="w-full max-w-xl">
                            <label
                                htmlFor="message"
                                className="block font-black uppercase tracking-wide text-black select-none"
                            >
                                Please type your message here...
                            </label>

                            <textarea
                                id="message"
                                className="w-full border-0 border-b-4 border-black bg-transparent p-0.5 text-xl focus:outline-none focus:ring-0 h-44.25"
                            />
                        </div>

                        <Button className="cursor-pointer h-14 rounded-none border-2 border-[#DEC7A6] bg-[#DEC7A6] px-8 text-sm font-extrabold uppercase text-black duration-300 hover:bg-transparent hover:text-white sm:text-base">
                            Book an Appointment
                        </Button>
                    </form>
                </div>




            </Container>
        </section>
    );
}