

// export async function generateStaticParams() {
//     const progetti = await getTuttiProgetti(); // da JSON/DB
//     return progetti.map(p => ({
//         slug: p.slug // genera /progetti/birolixcostruire, etc.
//     }));
// }

import { getProgetto } from "@/data/projects";

export default async function ProgettoPage({ params }) {
    const { slug } = await params;
    console.log(slug)
    const dati = await getProgetto(slug);

    if (!dati)
        notFound();

    // Usare custom tag (<DynamicLayout dati={dati} />;)
    return (
        <>
        </>
    )
}