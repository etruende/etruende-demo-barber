import { Container } from "../container";

import heroBg from "@/images/heroBg.png";
import address from "@/images/address.svg";
import hours from "@/images/hours.svg";
import phone from "@/images/phone.svg";

import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function BarberDemoHero() {
    return (
        <div className="relative bg-[#F8F5EF]">
            <div
                className="min-h-screen bg-cover bg-no-repeat text-white"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5)),
                    url(${heroBg.src})
                `,
                }}
            >
                <Container className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className="max-w-5xl select-none text-4xl font-black leading-tight uppercase text-center sm:text-5xl md:text-6xl lg:text-7xl">
                        The ultimate convenience for busy people
                    </h1>

                    <p className="mt-5 max-w-3xl text-base font-medium sm:text-lg md:text-xl lg:text-2xl">
                        Experience the Convenience of In-Home Barber Services
                    </p>

                    <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                        <Button className="cursor-pointer h-14 rounded-none border-2 border-[#DEC7A6] bg-[#DEC7A6] px-8 text-sm font-extrabold uppercase text-black duration-300 hover:bg-transparent hover:text-white sm:text-base">
                            Book an Appointment
                        </Button>

                        <Button className="cursor-pointer h-14 rounded-none border-2 border-white bg-transparent px-8 text-sm font-extrabold uppercase text-white duration-300 hover:bg-white hover:text-black sm:text-base">
                            Browse Services
                        </Button>
                    </div>
                </Container>
            </div>

            <div className="absolute md:bottom-0 md:left-1/2 w-full max-w-6xl md:-translate-x-1/2 md:translate-y-1/2 px-4 select-none">
                <div className="bg-white text-black shadow-2xl">
                    <div className="grid grid-cols-1 gap-10 px-6 py-10 sm:px-10 md:grid-cols-3 lg:px-16">
                        <div className="flex flex-col items-center text-center uppercase">
                            <Image src={address} alt="Address icon" className="mb-2" />

                            <h3 className="text-xl font-extrabold md:text-2xl">
                                Address
                            </h3>

                            <div className="mt-2 mb-3 h-1 w-20 bg-[#DEC7A6]" />

                            <p className="text-sm font-bold md:text-base">
                                3696 Lynden Road, Lefroy Ontario Canada
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center uppercase">
                            <Image src={phone} alt="Phone icon" className="mb-2" />

                            <h3 className="text-xl font-extrabold md:text-2xl">
                                Phone
                            </h3>

                            <div className="mt-2 mb-3 h-1 w-20 bg-[#DEC7A6]" />

                            <p className="text-sm font-bold md:text-base">
                                +62(123)-456-7890
                                <br />
                                +62(123)-456-7890
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center uppercase">
                            <Image src={hours} alt="Hours icon" className="mb-2" />

                            <h3 className="text-xl font-extrabold md:text-2xl">
                                Hours
                            </h3>

                            <div className="mt-2 mb-3 h-1 w-20 bg-[#DEC7A6]" />

                            <p className="text-sm font-bold md:text-base">
                                Mon – Sat: 9AM – 8PM
                                <br />
                                Sun: 9AM – 6PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}