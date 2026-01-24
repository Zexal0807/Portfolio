"use client"

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }) => {

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <Link href={`/progetti/${project.slug}`}>
                <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-quaternary-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-quaternary-accent/10 h-full flex flex-col pt-0">
                    {/* Image */}
                    <div
                        className="relative h-48 bg-gradient-to-br from-quaternary-accent/20 to-purple-accent/20 overflow-hidden cursor-pointer"
                    >
                        <img
                            src={project.previewImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                        {/* Status badge */}
                        <div className="absolute top-3 right-3">
                            {project.isPublished && (
                                <Badge className="bg-tertiary-accent/90 text-tertiary-accent-foreground border-0 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse" />
                                    Progetto pubblicato
                                </Badge>
                            )}
                        </div>

                        {/* Period */}
                        <div className="absolute bottom-3 left-3">
                            <span className="text-sm text-foreground/90 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                                {project.periodDisplay}
                            </span>
                        </div>
                    </div>

                    <CardContent className="p-5 flex-grow">
                        <h3
                            className="text-xl font-semibold text-foreground mb-2 group-hover:text-quaternary-accent transition-colors cursor-pointer"
                        >
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag) => (
                                <Badge
                                    key={tag.name}
                                    variant="outline"
                                    className={cn('text-xs', tag.tagClasses || "bg-muted text-muted-foreground")}
                                >
                                    {tag.name}
                                </Badge>
                            ))}
                            {project.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs bg-muted/50 text-muted-foreground">
                                    +{project.tags.length - 3}
                                </Badge>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
