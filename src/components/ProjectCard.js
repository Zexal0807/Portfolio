"use client"

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const tagColors = {
    JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    TypeScript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    ReactNative: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Database: "bg-slate-500/20 text-slate-400 border-slate-500/30",
    "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
    MongoDB: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    PostgreSQL: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    API: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "UI/UX": "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

const ProjectCard = ({ project }) => {
    // const navigate = useNavigate();

    return (
        <div>
            {JSON.stringify(project)}
        </div>
    )

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-quaternary-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-quaternary-accent/10 h-full flex flex-col">
                <Link href="">
                    {/* Image */}
                    <div
                        className="relative h-48 bg-gradient-to-br from-quaternary-accent/20 to-purple-accent/20 overflow-hidden cursor-pointer"
                        onClick={() => navigate(`/progetto/${project.id}`)}
                    >
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                        {/* Status badge */}
                        <div className="absolute top-3 right-3">
                            {project.isPublished ? (
                                <Badge className="bg-tertiary-accent/90 text-tertiary-accent-foreground border-0 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse" />
                                    Live
                                </Badge>
                            ) : (
                                <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                                    <ImageIcon className="w-3 h-3 mr-1.5" />
                                    Preview
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
                            onClick={() => navigate(`/progetto/${project.id}`)}
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
                                    key={tag}
                                    variant="outline"
                                    className={`text-xs ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                                >
                                    {tag}
                                </Badge>
                            ))}
                            {project.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs bg-muted/50 text-muted-foreground">
                                    +{project.tags.length - 3}
                                </Badge>
                            )}
                        </div>
                    </CardContent>

                    <CardFooter className="p-5 pt-0 flex gap-2">
                        <Button
                            variant="outline"
                            className="flex-1 border-quaternary-accent/50 hover:bg-quaternary-accent/10 hover:border-quaternary-accent"
                            onClick={() => navigate(`/progetto/${project.id}`)}
                        >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Scopri di più
                        </Button>
                        {project.isPublished && project.liveUrl && (
                            <Button
                                size="icon"
                                className="bg-gradient-to-r from-quaternary-accent to-purple-accent hover:opacity-90 text-white shadow-lg shadow-quaternary-accent/20"
                                asChild
                            >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </Button>
                        )}
                    </CardFooter>
                </Link>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
