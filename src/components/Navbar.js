"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
    { label: "Chi Sono", href: "#chi-sono" },
    { label: "Progetti", href: "#progetti" },
    { label: "Servizi", href: "#servizi" },
    { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/10"
                : "bg-transparent"
                }`
            }
        >
            <div className="container">
                <div className="flex items-center justify-between h-16 px-4">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl font-bold text-gradient-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Portfolio
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        ))}
                        <motion.div

                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button
                                className="bg-gradient-to-r from-primary-accent to-secondary-accent hover:opacity-90 text-white shadow-lg shadow-primary-accent/25 m-5 cursor-pointer"
                                href="#contatti"
                            >
                                Contattami
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence >
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-border/50 overflow-hidden bg-background"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary-accent/10 rounded-lg transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex justify-center"
                                >
                                    <Button
                                        className="mt-2 w-75 bg-gradient-to-r from-primary-accent to-secondary-accent hover:opacity-90 text-white cursor-pointer mb-2"
                                        href="#contatti"
                                    >
                                        Contattami
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
