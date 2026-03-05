"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        period: "2023 — Presente",
        role: "Consultor de Demand Gen & Tecnología",
        company: "Independiente",
        highlights: [
            "Arquitectura de motores digitales full-stack B2B integrando frameworks CRM con endpoints custom.",
            "Desarrollo de agentes conversacionales RAG con LLMs para automatización de ventas escalable.",
            "Generador de propuestas auto-alimentado que acelera ciclos de cierre vía APIs en Python.",
        ],
        tools: "Python, LangChain, RAG, CRM API, Next.js",
    },
    {
        period: "2018 — 2023",
        role: "Head of Marketing",
        company: "Empresa de Tecnología B2B",
        highlights: [
            "Dirección de equipos enfocados 100% en captura y nurturing de leads B2B.",
            "Gestión de campañas con partners estratégicos — crecimiento de 3-4% interanual.",
            "4× en marketing pipeline vs pipeline comercial.",
            "Integración de ecosistemas CRM (HubSpot/Salesforce) reduciendo silos de datos.",
        ],
        tools: "HubSpot, Salesforce, Grafana, Performance Ads, ABM",
    },
    {
        period: "2013 — 2018",
        role: "Digital Performance Manager",
        company: "Agencias & Consultoría",
        highlights: [
            "Gestión de campañas de alto presupuesto e implementaciones técnicas de SEO.",
            "Landing pages optimizadas a través de A/B testing riguroso.",
            "Fundamentos técnico-comerciales para escalar operaciones en agencia.",
        ],
        tools: "Google Ads, SEO, A/B Testing, Analytics, Landing Pages",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function TrajectoryScene() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = experiences[activeIndex];

    return (
        <section className="scene" style={{ background: "var(--bg-main)" }}>
            <motion.div
                className="scene-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="section-label">
                    <span className="label">Trayectoria</span>
                </motion.div>

                <motion.h2 variants={itemVariants} className="heading-lg" style={{ marginBottom: "3rem", maxWidth: "500px" }}>
                    +10 años construyendo <span className="text-gradient">crecimiento</span>
                </motion.h2>

                {/* Tab Navigation */}
                <motion.div variants={itemVariants} style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                    {experiences.map((exp, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                padding: "0.75rem 1.5rem",
                                background: activeIndex === idx ? "rgba(16,185,129,0.1)" : "var(--bg-card)",
                                border: `1px solid ${activeIndex === idx ? "rgba(16,185,129,0.3)" : "var(--border-subtle)"}`,
                                borderRadius: "var(--radius-md)",
                                color: activeIndex === idx ? "var(--accent-tertiary)" : "var(--text-muted)",
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.8125rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {exp.period}
                        </button>
                    ))}
                </motion.div>

                {/* Active Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" as const }}
                        style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "3rem", alignItems: "start" }}
                    >
                        {/* Sidebar */}
                        <div className="glass-card" style={{ padding: "1.75rem" }}>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontFamily: "var(--font-heading)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                                    Empresa
                                </div>
                                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem" }}>
                                    {active.company}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontFamily: "var(--font-heading)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                                    Herramientas
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                                    {active.tools.split(", ").map((t, i) => (
                                        <span key={i} className="skill-tag" style={{ fontSize: "0.75rem", padding: "0.25rem 0.625rem" }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main */}
                        <div>
                            <h3 className="heading-lg" style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>
                                {active.role}
                            </h3>

                            {active.highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    style={{
                                        padding: "1rem 0",
                                        borderBottom: i < active.highlights.length - 1 ? "1px solid var(--border-subtle)" : "none",
                                        display: "flex", gap: "1rem", alignItems: "flex-start",
                                    }}
                                >
                                    <span style={{ color: "var(--accent-primary)", fontSize: "0.75rem", lineHeight: 2, flexShrink: 0 }}>●</span>
                                    <p className="body-md">{h}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 280px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
