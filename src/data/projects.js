import { TAGS } from "./languages";

export const projects = [
    {
        slug: "birolixcostruire",
        title: "Sito Biroli X Costruire",
        period: "2025-12",
        periodDisplay: "Dicembre 2025",
        previewImage: "https://imagefaker.access.mx.com//250x100/",
        tags: [
            TAGS.WORDPRESS
        ],
        isPublished: true,
        liveUrl: "https://birolixcostruire.it",
        description: "Un semplice sito vetrina relizzato con WordPress, dove poter facilmente caricare i propri lavori svolti sotto forma di articoli.",
        images: [
            "https://imagefaker.access.mx.com//250x100/",
            "https://imagefaker.access.mx.com//250x100/",
            "https://imagefaker.access.mx.com//250x100/",
            "https://imagefaker.access.mx.com//250x100/",
            "https://imagefaker.access.mx.com//250x100/",
            "https://imagefaker.access.mx.com//250x100/",
        ],
        fullDescription: "Sviluppo completo di un'applicazione mobile e-commerce cross-platform utilizzando React Native. L'app offre un'esperienza utente fluida con gestione completa del catalogo prodotti, carrello intelligente, sistema di pagamenti sicuro tramite Stripe, e notifiche push per aggiornamenti ordini. L'architettura backend è costruita su Node.js con MongoDB per garantire scalabilità e performance ottimali.",
        githubUrl: null,
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

    // Dashboard carnovali settembre 2025
    // DailyCHeckCountdown Gennaio 2026
    // Sito Roujutsu  Dicembre 2025
    // Dashboard MYASD Gennario 2025
    // App. web università febbraio 2025
    // App presenze palestra ottobre 2024


];

export async function getProgetto(slug) {
    return projects.find(p => p.slug == slug)
}