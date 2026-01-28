"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

import { projects } from '@/data/projects'
import { TAGS } from "@/data/languages";

const tags = [
    TAGS.NEXTJS,
    TAGS.REACT,
    TAGS.REACT_NATIVE,
    TAGS.NODEJS,
    TAGS.PHP,
    TAGS.WORDPRESS
]

const Projects = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    const clearFilters = () => setSelectedTags([]);

    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        if (selectedTags.length === 0)
            setFilteredProjects(projects)
        else
            setFilteredProjects(projects
                .filter((project) => selectedTags
                    .some((tag) => project.tags.map(x => x.name).includes(tag.name))
                )
            )
    }, [projects, selectedTags]);

    return (
        <section id="progetti" className="py-24 bg-section-projects relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-quaternary-accent/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-accent/5 rounded-full blur-[150px]" />

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        I Miei <span className="text-gradient-primary">Progetti</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-quaternary-accent to-purple-accent mx-auto rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Una selezione dei progetti più significativi su cui ho lavorato.
                        <br />
                        Filtra per tecnologia per trovare quello che ti interessa.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10"
                >
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <Filter className="w-5 h-5 text-quaternary-accent" />
                        <span className="text-sm font-medium text-muted-foreground">Filtra per tecnologia:</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag) => (
                            <motion.div
                                key={tag.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Badge
                                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                                    className={`cursor-pointer px-4 py-2 text-sm transition-all ${selectedTags.includes(tag)
                                        ? "bg-gradient-to-r from-quaternary-accent to-purple-accent text-white border-0 shadow-lg shadow-quaternary-accent/25"
                                        : "hover:bg-quaternary-accent/10 hover:border-quaternary-accent/50"}`
                                    }
                                    onClick={() => toggleTag(tag)}
                                >
                                    {tag.name}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>

                    {selectedTags.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mt-5"
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearFilters}
                                className="text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                Rimuovi filtri ({selectedTags.length})
                            </Button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* {filteredProjects.map(x => x.slug).join(" - ")} */}

                    {projects.map((project) => {
                        const isVisible = filteredProjects.includes(project);

                        return (
                            <motion.div
                                key={project.slug}
                                initial={false}
                                animate={isVisible ? "visible" : "hidden"}
                                variants={{
                                    hidden: { opacity: 0, y: 30, display: "none" },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        display: "block",
                                        transition: { duration: 0.3 },
                                    },
                                }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
