import { Container } from "./container";

import fb from "@/images/facebook.svg";
import twitter from "@/images/Twitter.svg";
import ig from "@/images/Instagram.svg";
import li from "@/images/linkedIn.svg";

import Image from "next/image";
import Link from "next/link";

export default function BarberDemoLowFooter() {
    return (
        <footer className='bg-[#121212] py-5 md:py-8'>
            <Container className="flex justify-between flex-wrap gap-y-5 gap-x-10">
                <span className="text-white">© Copyright 2022 barbershop - All right reserved</span>

                <ul className="flex gap-5 items-center">
                    <li>
                        <Link href="#">
                            <Image src={fb} alt={""} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image className="w-6 h-6" src={twitter} alt={""} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image className="w-6 h-6" src={ig} alt={""} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image className="w-6 h-6" src={li} alt={""} />
                        </Link>
                    </li>
                </ul>
            </Container>
        </footer>
    );
}