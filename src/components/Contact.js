"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    // const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simula invio form
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // toast({
        //     title: "Messaggio inviato! ✨",
        //     description: "Ti risponderò il prima possibile. Grazie per avermi contattato!",
        // });

        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-foreground" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-primary-accent" },
        { icon: Mail, href: "mailto:email@example.com", label: "Email", color: "hover:text-secondary-accent" },
    ];

    return (
        <section id="contatti" className="py-24 bg-section-contact relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary-accent/5 rounded-full blur-[120px]" />

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                        <span className="text-gradient-primary">Contattami</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Hai un progetto in mente? Vuoi una consulenza?
                        Scrivimi e parliamone insieme!
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <Card className="bg-gradient-to-br from-primary-accent via-purple-accent to-secondary-accent text-white overflow-hidden border-0 shadow-2xl shadow-primary-accent/20">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageCircle className="w-8 h-8" />
                                    <h3 className="text-2xl font-semibold">
                                        Parliamo!
                                    </h3>
                                </div>
                                <p className="text-white/90 mb-8">
                                    Sono sempre interessato a nuove sfide e collaborazioni.
                                    Che tu abbia bisogno di un'app, un sito web o una consulenza,
                                    sono qui per aiutarti.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <Mail className="w-5 h-5" />
                                        <span className="text-sm">email@example.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <MapPin className="w-5 h-5" />
                                        <span className="text-sm">Italia</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-4">
                                Seguimi sui social
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} hover:border-primary-accent/50 transition-colors`}
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-foreground">Nome</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Il tuo nome"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="bg-background/50 border-border/50 focus:border-primary-accent"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-foreground">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="la.tua@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="bg-background/50 border-border/50 focus:border-primary-accent"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-foreground">Messaggio</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Raccontami del tuo progetto..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="bg-background/50 border-border/50 focus:border-primary-accent resize-none"
                                        />
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-primary-accent to-secondary-accent hover:opacity-90 text-white font-semibold py-6 shadow-lg shadow-primary-accent/25"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <motion.span
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    >
                                                        ⏳
                                                    </motion.span>
                                                    Invio in corso...
                                                </span>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Invia messaggio
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
