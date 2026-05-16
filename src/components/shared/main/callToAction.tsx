import { Container } from "../container";
import bg from "@/images/callToActionBg.png"

import { Button } from "@/components/ui/button";


export default function BarberDemoCallToActionBlock() {
    return (
        <div
            className="bg-cover bg-no-repeat text-white py-20 md:py-30"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5)),
                    url(${bg.src})
                `,
            }}
        >
            <Container className="flex flex-col justify-center items-center ">
                <h2 className="font-extrabold text-3xl md:text-5xl max-w-203.5 text-center mb-10 uppercase leading-tight">
                    Experience the luxury of concierge barber services at your home
                </h2>

                <Button className="cursor-pointer h-14 rounded-none border-2 border-[#DEC7A6] bg-[#DEC7A6] px-8 text-sm font-extrabold uppercase text-black duration-300 hover:bg-transparent hover:text-white sm:text-base">
                    Book an Appointment
                </Button>

            </Container>
        </div>
    );
}