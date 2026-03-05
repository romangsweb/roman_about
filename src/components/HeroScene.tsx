"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadCaptureModal from "./LeadCaptureModal";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const lineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroScene() {
    const [showTagline, setShowTagline] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTagline(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="scene" style={{ background: "var(--bg-deep)" }}>
            {/* Ambient Glow */}
            <div
                className="glow-blob"
                style={{
                    width: "600px", height: "600px",
                    top: "-20%", right: "-10%",
                    background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
                }}
            />
            <div
                className="glow-blob"
                style={{
                    width: "400px", height: "400px",
                    bottom: "10%", left: "-5%",
                    background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
                }}
            />

            <motion.div
                className="scene-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "85vh" }}
            >
                {/* Status Badge */}
                <motion.div variants={lineVariants} style={{ marginBottom: "3rem" }}>
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        padding: "0.5rem 1.25rem",
                        border: "1px solid rgba(16,185,129,0.2)",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.8125rem", color: "var(--accent-tertiary)",
                        fontFamily: "var(--font-body)",
                    }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-primary)" }} />
                        Disponible para proyectos
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1 variants={itemVariants} className="heading-xl" style={{ marginBottom: "1.5rem" }}>
                    Román{" "}
                    <span className="text-gradient">García</span>
                </motion.h1>

                {/* Tagline */}
                <AnimatePresence>
                    {showTagline && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p style={{
                                fontFamily: "var(--font-heading)", fontSize: "1.25rem",
                                color: "var(--text-secondary)", marginBottom: "0.75rem",
                                fontWeight: 400,
                            }}>
                                Creative Technologist · Marketing Architect · AI Builder.
                            </p>
                            <p className="body-lg" style={{ maxWidth: "540px", marginBottom: "3rem" }}>
                                Especializado en Generación de Demanda B2B.
                                La tecnología y la IA son el medio para alcanzar facturación predecible y escalable.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                    <a href="#contacto" className="btn-primary">Hablemos →</a>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn-secondary"
                        style={{ padding: "0.875rem 1.5rem" }}
                    >
                        Descargar CV ↓
                    </button>
                    <a
                        href="https://mx.linkedin.com/in/rom%C3%A1n-garc%C3%ADa"
                        target="_blank" rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        LinkedIn →
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute", bottom: "3rem",
                        left: "50%", transform: "translateX(-50%)",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                    }}
                >
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        Scroll
                    </span>
                    <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, var(--text-muted), transparent)" }} />
                </motion.div>
            </motion.div>

            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={() => console.log("Lead captured")}
            />
        </section>
    );
}
