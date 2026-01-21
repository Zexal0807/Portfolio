import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata = {
    metadataBase: process.env.HOST,
    title: {
        default: 'Gallina Roberto | Portfolio'
    },
    //     description: 'Scopri il Roujutsu a Prevalle: arte marziale completa per bambini, ragazzi e adulti. Corsi di difesa personale, Roujutsu Tai e benessere mente-corpo. Palestra arti marziali Prevalle (Brescia).',
    //     keywords: [
    //         'arti marziali prevalle',
    //         'roujutsu prevalle',
    //         'palestra prevalle',
    //         'difesa personale prevalle',
    //         'arti marziali brescia',
    //         'corsi arti marziali bambini prevalle',
    //         'jujutsu prevalle',
    //         'karate prevalle',
    //     ],
    //     icons: {
    //         icon: '/favicon.ico',
    //         shortcut: '/favicon.ico',
    //         apple: '/apple-touch-icon.png',
    //     },
    //     manifest: '/site.webmanifest',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            maxSnippet: -1,
            maxImagePreview: 'large',
            maxVideoPreview: -1,
        },
    },
    authors: [{ name: 'Gallina Roberto', url: process.env.HOST }],
    alternates: {
        canonical: process.env.HOST,
    },
    openGraph: {
        title: 'Gallina Roberto | Portfolio',
        //         description: 'Arte marziale completa a Prevalle: corsi per bambini, ragazzi e adulti. Difesa personale e benessere.',
        url: process.env.HOST,
        type: 'website',
        locale: 'it_IT',
        siteName: 'Gallina Roberto | Portfolio',
        //         images: [
        //             {
        //                 url: './logo.png',
        //                 width: 1200,
        //                 height: 630,
        //                 alt: 'Roujutsu Prevalle logo',
        //             },
        //         ],
        //     },
        //     twitter: {
        //         card: 'summary_large_image',
        //         title: 'Roujutsu Prevalle | Arti Marziali',
        //         description: 'Arte marziale completa a Prevalle (BS). Corsi per tutte le età.',
        //         images: ['./logo.png'],
        //     },
        //     other: {
        //         schemaLocalBusiness: JSON.stringify({
        //             '@context': 'https://schema.org',
        //             '@type': 'SportsActivityLocation',
        //             name: 'A.S.D. Yoshitaka Arti Marziali Prevalle - Roujutsu',
        //             description: 'Palestra di arti marziali a Prevalle specializzata in Roujutsu, una disciplina orientale completa fondata dal Maestro Ottorino Mombelli nel 2013. Corsi per bambini, ragazzi e adulti.',
        //             image: './logo.png',
        //             address: {
        //                 '@type': 'PostalAddress',
        //                 streetAddress: 'Via Della Fonte, 1',
        //                 addressLocality: 'Prevalle',
        //                 addressRegion: 'BS',
        //                 postalCode: '25080',
        //                 addressCountry: 'IT',
        //             },
        //             geo: {
        //                 '@type': 'GeoCoordinates',
        //                 latitude: '45.5472064',
        //                 longitude: '10.4196662',
        //             },
        //             url: host,
        //             telephone: '+39-351-876-8171',
        //             email: 'info@roujutsu.it',
        //             priceRange: '€€',
        //             openingHoursSpecification: [
        //                 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '10:00' },
        //                 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '19:00', closes: '21:30' },
        //                 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '18:30', closes: '19:30' },
        //                 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '19:30', closes: '21:30' },
        //                 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '18:30', closes: '19:30' },
        //                 { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '19:00', closes: '21:30' },
        //             ],
        //             sameAs: [
        //                 'https://www.facebook.com/Roujutsu/',
        //                 'https://www.instagram.com/roujutsu/',
        //             ],
        //             founder: {
        //                 '@type': 'Person',
        //                 name: 'Ottorino Mombelli',
        //                 jobTitle: 'Maestro Fondatore',
        //             },
        //             foundingDate: '1975',
        //             sport: 'Roujutsu',
        //         }),
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="it">
            <body className="min-h-screen bg-background">
                <Navbar />
                <main>
                    {children}
                </main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}