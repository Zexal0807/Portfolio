"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export default function ProgettiDetailLayout({ dati }) {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
            >
                <div className="container px-4 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="gap-2 text-muted-foreground hover:text-foreground flex items-center"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Torna al Portfolio
                    </Link>
                    <div className="flex gap-2">
                        {dati.githubUrl && (
                            <Button variant="outline" size="sm" asChild>
                                <a href={dati.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    Codice
                                </a>
                            </Button>
                        )}
                        {dati.isPublished && dati.liveUrl && (
                            <Button size="sm" className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white" asChild>
                                <a href={dati.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Visita Live
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-section-hero to-background">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Badge className={dati.isPublished
                                ? "bg-tertiary-accent/90 text-tertiary-accent-foreground border-0"
                                : "bg-muted text-muted-foreground"
                            }>
                                {dati.isPublished ? "Progetto Pubblicato" : ""}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                                <Calendar className="w-4 h-4 mr-1.5" />
                                {dati.periodDisplay}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            {dati.title}
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {dati.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2">
                            {dati.tags.map((tag) => (
                                <Badge
                                    key={tag.name}
                                    variant="outline"
                                    className={`text-sm px-4 py-1 ${tag.tagClasses || "bg-muted text-muted-foreground"}`}
                                >
                                    {tag.name}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            {/* <section className="py-16 bg-section-about">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                            Galleria Immagini
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                            {dati.images.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card"
                                    onClick={() => {
                                        setCurrentImageIndex(idx);
                                        setLightboxOpen(true);
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`${dati.title} - Immagine ${idx + 1}`}
                                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {dati.videoUrl && (
                            <div className="mt-8 text-center">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-quaternary-accent/50 hover:bg-quaternary-accent/10"
                                    asChild
                                >
                                    <a href={dati.videoUrl} target="_blank" rel="noopener noreferrer">
                                        <Play className="w-5 h-5 mr-2" />
                                        Guarda il Video Demo
                                    </a>
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section> */}

            {/* Description Section */}
            {/* <section className="py-16 bg-section-datis">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                Descrizione del Progetto
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {dati.fullDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* Features Section */}
            {/* {dati.features && dati.features.length > 0 && (
                <section className="py-16 bg-section-services">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-tertiary-accent" />
                                    Funzionalità Principali
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {dati.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <Card className="bg-card/50 border-border/50 hover:border-tertiary-accent/50 transition-colors">
                                                <CardContent className="p-4 flex items-start gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-tertiary-accent mt-2 flex-shrink-0" />
                                                    <span className="text-foreground">{feature}</span>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )} */}

            {/* Challenges & Outcome */}
            {/* <section className="py-16 bg-section-contact">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {dati.challenges && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="h-full bg-card/50 border-border/50">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                                            <Lightbulb className="w-5 h-5 text-quaternary-accent" />
                                            Sfide Affrontate
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {dati.challenges}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}

                        {dati.outcome && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="h-full bg-card/50 border-border/50">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                                            <Trophy className="w-5 h-5 text-tertiary-accent" />
                                            Risultati Ottenuti
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {dati.outcome}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            {/* <section className="py-16 bg-section-hero">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            Ti piace questo progetto?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Contattami per discutere del tuo prossimo progetto o per saperne di più su questo lavoro.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary-accent to-secondary-accent text-white"
                                onClick={() => navigate("/#contatti")}
                            >
                                Contattami
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => navigate("/#progetti")}
                            >
                                Vedi altri progetti
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* Lightbox */}
            {/* <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl border-border p-0">
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 z-10 bg-background/50 hover:bg-background/80"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </Button>

                        <img
                            src={dati.images[currentImageIndex]}
                            alt={`${dati.title} - Immagine ${currentImageIndex + 1}`}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />

                        {dati.images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
                                    onClick={prevImage}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
                                    onClick={nextImage}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </Button>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {dati.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? "bg-primary-accent" : "bg-foreground/30"
                                                }`}
                                            onClick={() => setCurrentImageIndex(idx)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </DialogContent>
            </Dialog> */}
        </div>
    )
}