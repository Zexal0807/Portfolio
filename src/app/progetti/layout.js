
import { notFound } from 'next/navigation';
import { ProgettoProvider } from '@/components/ProgettoContext';
import { getProgetto } from '@/data/projects';

export async function generateStaticParams() {
    const progetti = await getTuttiProgetti();
    return progetti.map(p => ({ slug: p.slug }));
}

export default async function ProgettiLayout({ children, params }) {
    const slug = params.slug || 'default';
    const dati = await getProgetto(slug);

    if (!dati) {
        notFound();
    }

    return (
        <ProgettoProvider dati={dati}>
            {children}
        </ProgettoProvider>
    );
}