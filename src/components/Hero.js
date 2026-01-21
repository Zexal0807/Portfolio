"use client"

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";

const skills = [
    "Sviluppatore React & NextJS",
    "React Native Developer",
    "Database Architect",
    "Full-Stack Developer",
    "Consulente IT",
    "Web Developer",
];

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-hero">
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-primary-accent/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary-accent/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-accent/10 rounded-full blur-[150px]"
                />
            </div>

            {/* Floating point background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 6 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                        className="absolute w-2 h-2 bg-primary-accent/40 rounded-full"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 15}%`,
                        }}
                    />
                ))}
            </div>

            {/* Main container */}
            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-md border border-primary-accent/30 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-tertiary-accent" />
                        <span className="text-sm font-medium text-foreground">Disponibile per nuovi progetti</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight"
                    >
                        <span className="text-gradient-primary">
                            Roberto Gallina
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center"
                    >
                        <TypewriterText
                            texts={skills}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseDuration={2500}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
                    >
                        Trasformo idee in soluzioni digitali innovative.
                        Specializzato in React, React Native e architetture database scalabili.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            size="lg"
                            className="bg-gradient-to-r from-primary-accent to-secondary-accent hover:opacity-90 text-white font-semibold px-8 shadow-lg shadow-primary-accent/25"
                            onClick={() => scrollToSection("progetti")}
                        >
                            Scopri i miei progetti
                        </button>
                        <button
                            size="lg"
                            variant="outline"
                            className="border-2 border-foreground/20 hover:bg-foreground/10 hover:border-primary-accent/50"
                            onClick={() => scrollToSection("contatti")}
                        >
                            Contattami
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-15 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => scrollToSection("chi-sono")}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
