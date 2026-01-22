import { TAGS } from "./languages";

export const projects = [
    {
        slug: "birolixcostruire",
        title: "BiroliXCostruire",
        description: "Applicazione mobile cross-platform per un e-commerce con gestione carrello, pagamenti e notifiche push. UI moderna e performante.",
        fullDescription: "Sviluppo completo di un'applicazione mobile e-commerce cross-platform utilizzando React Native. L'app offre un'esperienza utente fluida con gestione completa del catalogo prodotti, carrello intelligente, sistema di pagamenti sicuro tramite Stripe, e notifiche push per aggiornamenti ordini. L'architettura backend è costruita su Node.js con MongoDB per garantire scalabilità e performance ottimali.",
        period: "2024-01",
        periodDisplay: "Gennaio 2024",
        tags: [
            TAGS.JAVASCRIPT
        ],
        isPublished: true,
        liveUrl: "https://example.com/app",
        githubUrl: "https://github.com/username/ecommerce-app",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        features: [
            "Catalogo prodotti con ricerca avanzata e filtri",
            "Carrello intelligente con persistenza locale",
            "Sistema di pagamenti sicuro con Stripe",
            "Notifiche push per aggiornamenti ordini",
            "Sistema di recensioni e valutazioni",
            "Gestione wishlist e prodotti preferiti"
        ],
        challenges: "La sfida principale è stata ottimizzare le performance dell'app mantenendo un'esperienza utente fluida anche con cataloghi di migliaia di prodotti. Abbiamo implementato lazy loading, caching intelligente e virtualizzazione delle liste.",
        outcome: "L'app ha raggiunto oltre 10.000 download nel primo mese con un rating medio di 4.8 stelle. Il tasso di conversione è aumentato del 35% rispetto alla versione web mobile."
    }
];

export async function getProgetto(slug) {
    return projects.find(p => p.slug == slug)
}