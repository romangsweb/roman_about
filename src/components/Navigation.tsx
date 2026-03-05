"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenes = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Perfil" },
    { id: "expertise", label: "Expertise" },
    { id: "trajectory", label: "Trayectoria" },
    { id: "work", label: "Proyectos" },
    { id: "certifications", label: "Certificaciones" },
    { id: "lab", label: "Lab" },
    { id: "contact", label: "Contacto" },
];

export default function Navigation() {
    const [activeScene, setActiveScene] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);

        const handleScroll = () => {
            const sections = document.querySelectorAll(".scene");
            const scrollY = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, idx) => {
                const el = section as HTMLElement;
                if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
                    setActiveScene(idx);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToScene = (idx: number) => {
        const sections = document.querySelectorAll(".scene");
        if (sections[idx]) {
            sections[idx].scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        right: "2rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 100,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "4px",
                    }}
                >
                    {scenes.map((scene, idx) => (
                        <button
                            key={scene.id}
                            onClick={() => scrollToScene(idx)}
                            style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                background: "none", border: "none", cursor: "pointer",
                                padding: "4px 0", transition: "all 0.3s ease",
                            }}
                            aria-label={`Go to ${scene.label}`}
                        >
                            <span style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.625rem", fontWeight: 500,
                                letterSpacing: "0.08em",
                                color: activeScene === idx ? "var(--text-primary)" : "var(--text-muted)",
                                opacity: activeScene === idx ? 1 : 0,
                                transform: activeScene === idx ? "translateX(0)" : "translateX(8px)",
                                transition: "all 0.3s ease",
                                whiteSpace: "nowrap",
                            }}>
                                {scene.label}
                            </span>

                            <motion.div
                                animate={{
                                    width: activeScene === idx ? "20px" : "6px",
                                    height: activeScene === idx ? "3px" : "6px",
                                    background: activeScene === idx ? "var(--accent-primary)" : "var(--text-muted)",
                                    borderRadius: activeScene === idx ? "2px" : "50%",
                                    opacity: activeScene === idx ? 1 : 0.3,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                    ))}
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
