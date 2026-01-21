"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Database, Users } from "lucide-react";

export const services = [
    {
        id: "web",
        title: "Sviluppo Web",
        description: "Creazione di applicazioni web moderne, responsive e performanti utilizzando le tecnologie più avanzate.",
        icon: Code,
        features: [
            "Single Page Applications (SPA)",
            "Progressive Web Apps (PWA)",
            "Dashboard e portali aziendali",
            "E-commerce personalizzati",
        ],
    },
    {
        id: "mobile",
        title: "App Mobile",
        description: "Sviluppo di applicazioni mobile cross-platform con React Native, garantendo performance native su iOS e Android.",
        icon: Smartphone,
        features: [
            "App iOS e Android",
            "UI/UX ottimizzata per mobile",
            "Integrazione API e servizi",
            "Notifiche push e geolocalizzazione",
        ],
    },
    {
        id: "database",
        title: "Database & Backend",
        description: "Progettazione e implementazione di database scalabili e API robuste per supportare le tue applicazioni.",
        icon: Database,
        features: [
            "Progettazione database relazionali",
            "Database NoSQL (MongoDB)",
            "API REST e GraphQL",
            "Ottimizzazione performance",
        ],
    },
    {
        id: "consulting",
        title: "Consulenza IT",
        description: "Supporto strategico e tecnico per guidare la tua azienda nelle scelte tecnologiche più adatte.",
        icon: Users,
        features: [
            "Analisi requisiti e fattibilità",
            "Code review e refactoring",
            "Formazione team di sviluppo",
            "Migrazione sistemi legacy",
        ],
    },
];

const cardColors = [
    {
        gradient: "from-primary-accent to-purple-accent",
        shadow: "shadow-primary-accent/20",
        border: "hover:border-primary-accent/50"
    },
    {
        gradient: "from-secondary-accent to-quaternary-accent",
        shadow: "shadow-secondary-accent/20",
        border: "hover:border-secondary-accent/50"
    },
    {
        gradient: "from-tertiary-accent to-primary-accent",
        shadow: "shadow-tertiary-accent/20",
        border: "hover:border-tertiary-accent/50"
    },
    {
        gradient: "from-purple-accent to-secondary-accent",
        shadow: "shadow-purple-accent/20",
        border: "hover:border-purple-accent/50"
    },
];

const Services = () => {
    return (
        <section id="servizi" className="py-24 bg-section-services relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-accent/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-tertiary-accent/5 rounded-full blur-[120px]" />

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                        Servizi <span className="text-gradient-secondary">Offerti</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary-accent to-tertiary-accent mx-auto rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Offro soluzioni digitali complete per ogni esigenza,
                        dalla consulenza strategica allo sviluppo completo del prodotto.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col gap-6 max-w-5xl mx-auto"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const colors = cardColors[index % cardColors.length];

                        return (
                            <motion.div
                                key={service.id}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6 },
                                    },
                                }}
                                whileHover={{ x: 8, scale: 1.01 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card
                                    className={`group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 ${colors.border} transition-all duration-300 hover:shadow-xl`}
                                >
                                    {/* Gradient accent */}
                                    <div className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl ${colors.gradient} opacity-5 rounded-bl-full transition-opacity group-hover:opacity-15`} />

                                    <CardContent className="relative p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                                transition={{ duration: 0.5 }}
                                                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg ${colors.shadow} shrink-0`}
                                            >
                                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                            </motion.div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-colors mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="text-muted-foreground mb-5">
                                                    {service.description}
                                                </p>

                                                {/* Features as horizontal tags on desktop */}
                                                <div className="flex flex-wrap gap-2">
                                                    {service.features.map((feature, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`text-sm px-3 py-1.5 rounded-full bg-gradient-to-r ${colors.gradient} bg-opacity-10 text-foreground/90 border border-border/30`}
                                                            style={{ background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)` }}
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
