import { TAGS } from "./languages";

export const projects = [
    // Febbraio 2026 Prontoemergenza?
    {
        slug: "birolixcostruire",
        title: "Sito Biroli X Costruire",
        period: "2025-12",
        periodDisplay: "Dicembre 2025",
        previewImage: "/birolixcostruire/1.png",
        tags: [
            TAGS.WORDPRESS
        ],
        isPublished: true,
        liveUrl: "https://birolixcostruire.it",
        description: "Sito vetrina realizzato con WordPress per l'impresa edile Biroli X Costruire. Il progetto è stato pensato per offrire un sistema semplice e immediato, che consente al proprietario di pubblicare autonomamente i propri lavori come articoli.",
        images: [
            "/birolixcostruire/1.png",
            "/birolixcostruire/2.png",
            "/birolixcostruire/3.png"
        ],
        fullDescription: "Lo sviluppo del sito è stato interamente realizzato con WordPress, utilizzando un tema personalizzato per rispecchiare l'identità visiva dell'azienda. L'obiettivo principale era creare una piattaforma semplice, pulita e facilmente aggiornabile, nella quale il cliente potesse aggiungere nuovi lavori senza competenze tecniche. Ogni progetto è presentato come un articolo con galleria fotografica, descrizione e tag dedicati ai diversi tipi di intervento.",
        githubUrl: null,
        features: [
            "Gestione dei lavori tramite articoli WordPress",
            "Interfaccia di amministrazione semplificata",
            "Gallerie fotografiche per ogni progetto",
            "Ottimizzazione SEO di base e caricamento veloce"
        ],
        challenges: "La sfida principale è stata creare un sistema che permettesse al cliente di aggiornare i contenuti in autonomia, mantenendo al contempo coerenza grafica e facilità d'uso. Sono stati implementati campi personalizzati e modelli semplici per garantire un processo di pubblicazione immediato.",
        outcome: "Il risultato è un sito professionale, leggero e facilmente gestibile, che permette al proprietario di mostrare il proprio lavoro in modo ordinato e costante, senza dover ricorrere a supporto tecnico esterno."
    },
    // Dashboard carnovali settembre 2025
    // DailyCHeckCountdown Gennaio 2026
    {
        slug: "roujutsu",
        title: "Sito Roujutsu",
        period: "2024-12",
        periodDisplay: "Dicembre 2024",
        previewImage: "/roujutsu/1.png",
        tags: [
            TAGS.NEXTJS,
            TAGS.JSON,
            TAGS.NODEJS,
            TAGS.TAILWINDCSS
        ],
        isPublished: true,
        liveUrl: "https://www.roujutsu.it",
        description: "Sito web realizzato con Next.js (App Router) per l'arte marziale completa Roujutsu",
        images: [
            "/roujutsu/1.png",
            "/roujutsu/2.png",
        ],
        fullDescription: "Realizzazione di un sito web animato con Next.js (App Router) per l'arte marziale completa Roujutsu, valorizando al massimo le varie sezioni e la storia, mantenendo tutta la galleria storica",
        githubUrl: null,
        features: [
            "Sito completamente animato",
            "Hero section con statistiche chiave per impatto immediato",
            "Timeline interattiva della storia",
            "Galleria eventi"
        ],
        challenges: "Creare un sito informativo sull'arte marziale completa Roujutsu, migliorane l'aspetto rispetto a delle precedenti versioni, introdurre uno stile moderno e animato",
        outcome: "Sito moderno e di effetto,  per attirare iscritti tramite CTA"
    }
    // Dashboard MYASD Gennario 2025
    // App. web università febbraio 2025
    // App presenze palestra ottobre 2024
    // QRCODE generator maggio 2022
];

export async function getProgetto(slug) {
    return projects.find(p => p.slug == slug)
}