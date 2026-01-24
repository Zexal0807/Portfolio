
import { projects } from '@/data/projects'

export async function generateStaticParams() {
    // const progetti = await getTuttiProgetti(); // da JSON/DB
    const progetti = projects
    return progetti.map(p => ({
        slug: p.slug
    }));
}

import ProgettiDetailLayout from "@/components/ProjectDetailLayout";
import { getProgetto } from "@/data/projects";

export default async function ProgettoPage({ params }) {
    const { slug } = await params;

    const dati = await getProgetto(slug);

    if (!dati)
        notFound();

    return (
        <ProgettiDetailLayout dati={dati} />
    )
}