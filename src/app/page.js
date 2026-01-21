import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

// export const metadata = {
//     title: 'La nostra storia',
//     description: 'La storia del Roujutsu a Prevalle: arte marziale completa per bambini, ragazzi e adulti. Corsi di difesa personale, Roujutsu Tai e benessere mente-corpo. Palestra arti marziali Prevalle (Brescia).',
//     alternates: {
//         canonical: '/storia',
//     },
//     openGraph: {
//         title: 'La nostra storia',
//         description: 'La storia del Roujutsu a Prevalle: arte marziale completa per bambini, ragazzi e adulti. Corsi di difesa personale, Roujutsu Tai e benessere mente-corpo. Palestra arti marziali Prevalle (Brescia).',
//         url: '/storia',
//     }
// }


export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />

            <Contact />
        </>
    );
}
