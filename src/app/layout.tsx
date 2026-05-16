import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

import BarberDemoFooter from "@/components/shared/footer";
import BarberDemoLowFooter from "@/components/shared/lowFooter";


const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Barbershop demo landing page",
  description: "Developed by EtruendE Webstudio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${barlow.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BarberDemoFooter />
        <BarberDemoLowFooter />
      </body>
    </html>
  );
}