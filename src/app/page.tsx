import BarberDemoHero from "@/components/shared/main/hero";
import BarberDemoFirstBlock from "@/components/shared/main/firstBlock";
import BarberDemoServices from "@/components/shared/main/services";
import BarberDemoCallToActionBlock from "@/components/shared/main/callToAction";
import BarberDemoWhy from "@/components/shared/main/why";

export default function BarberDemoMainPage() {
    return (
        <>
            <BarberDemoHero />
            <BarberDemoFirstBlock />
            <BarberDemoServices />
            <BarberDemoCallToActionBlock />
            <BarberDemoWhy />
        </>
    );
}