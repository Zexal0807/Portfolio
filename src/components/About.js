"use client"

import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiGit, SiDocker, SiTailwindcss, SiNextdotjs, SiPhp, SiNeo4J } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Database } from "lucide-react";
import Link from "next/link";

const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", bgColor: "rgba(255, 255, 255, 0.1)" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bgColor: "rgba(247, 223, 30, 0.1)" },
    { name: "React", icon: SiReact, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.1)" },
    { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.1)" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bgColor: "rgba(49, 120, 198, 0.1)" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", bgColor: "rgba(51, 153, 51, 0.1)" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", bgColor: "rgba(65, 105, 225, 0.1)" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", bgColor: "rgba(71, 162, 72, 0.1)" },
    { name: "Neo4J", icon: SiNeo4J, color: "#47A248", bgColor: "rgba(71, 162, 72, 0.1)" },
    { name: "REST API", icon: Database, color: "#FF6B6B", bgColor: "rgba(255, 107, 107, 0.1)" },
    { name: "PHP", icon: SiPhp, color: "#F05032", bgColor: "rgba(240, 80, 50, 0.1)" },
    { name: "Git", icon: SiGit, color: "#F05032", bgColor: "rgba(240, 80, 50, 0.1)" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", bgColor: "rgba(36, 150, 237, 0.1)" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.1)" },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const About = () => {
    return (
        <section id="chi-sono" className="py-24 bg-section-about relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary-accent/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-accent/5 rounded-full blur-[120px]" />

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                        Chi <span className="text-gradient-secondary">Sono</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-tertiary-accent to-primary-accent mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-center">
                        {/* Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:col-span-2 flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-tertiary-accent via-primary-accent to-secondary-accent p-1 shadow-2xl shadow-primary-accent/20">
                                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                                        <span className="text-7xl md:text-8xl">👨‍💻</span>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                    className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-xl shadow-lg"
                                >
                                    <span className="text-xl font-bold text-white">5+ anni</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="md:col-span-3 space-y-5"
                        >
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Sono un <strong className="text-tertiary-accent">docente di informatica</strong> con la passione per la creazione di applicazioni Web e Mobile eleganti e funzionali.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Con oltre 5 anni di esperienza mi sono specializzo in <strong className="text-primary-accent">NextJS</strong> per il frontend e mentre lato backend lavoro con <strong className="text-primary-accent">NodeJS</strong> e database sia Relazionali (MySql, PostgreSQL, Sqlite) che NoSQL (MongoDB, Neo4j)
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Offro <strong className="text-secondary-accent">consulenza informatica</strong> per aiutare
                                aziende e startup a prendere le decisioni tecnologiche migliori, supportarle nella creazione e pubblicazione delle loro WebApp.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Credo fortemente, oggi più che mai, che un programma non deve essere solo funzionante, ma un professionista del settore deve produrre un codice pulito, predisposto alle modifiche e sia supportato fino alla sua pubblicazione o anche oltre.
                            </p>
                        </motion.div>
                    </div>

                    {/* Skills */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        className="mt-16"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-xl font-semibold text-foreground mb-8 text-center"
                        >
                            Le mie <span className="text-gradient-primary">competenze</span>
                        </motion.h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary-accent/50 transition-colors cursor-default"
                                        style={{ backgroundColor: skill.bgColor }}
                                    >
                                        <Icon className="w-8 h-8" style={{ color: skill.color }} />
                                        <span className="text-xs font-medium text-foreground/80 text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
