"use client";

import { motion } from "framer-motion";

/* Refined minimal line-art SVG icons — artistic, not tech */
const icons = {
    growth: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M4 24 C8 18, 12 20, 16 14 C18 11, 22 8, 24 4"
                stroke="var(--accent-primary)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" as const }} />
            <motion.path d="M19 4 L24 4 L24 9"
                stroke="var(--accent-tertiary)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }} />
        </svg>
    ),
    connect: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <motion.circle cx="7" cy="7" r="3" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} />
            <motion.circle cx="21" cy="7" r="3" stroke="var(--accent-primary)" strokeWidth="1.5" fill="none"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.4 }} />
            <motion.circle cx="14" cy="21" r="3" stroke="var(--accent-tertiary)" strokeWidth="1.5" fill="none"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4 }} />
            <motion.path d="M9 9 L12 19 M19 9 L16 19"
                stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }} />
        </svg>
    ),
    spark: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <motion.path d="M14 2 L14 10 M14 18 L14 26 M2 14 L10 14 M18 14 L26 14"
                stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }} />
            <motion.path d="M6 6 L10 10 M18 10 L22 6 M6 22 L10 18 M18 18 L22 22"
                stroke="var(--accent-tertiary)" strokeWidth="1.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }} />
            <motion.circle cx="14" cy="14" r="3" fill="var(--accent-primary)" fillOpacity="0.2"
                stroke="var(--accent-primary)" strokeWidth="1.5"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.3 }} />
        </svg>
    ),
    layers: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <motion.path d="M14 4 L26 10 L14 16 L2 10 Z"
                stroke="var(--accent-primary)" strokeWidth="1.5" fill="none" strokeLinejoin="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }} />
            <motion.path d="M2 16 L14 22 L26 16"
                stroke="var(--accent-secondary)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }} />
            <motion.path d="M2 22 L14 28 L26 22"
                stroke="var(--accent-tertiary)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }} />
        </svg>
    ),
};

const categories = [
    {
        title: "Growth & Leadership",
        icon: icons.growth,
        items: ["Estrategia", "Gestión de Equipos", "Presupuestos", "Performance Ads", "ABM", "SEO & SEM"],
        desc: "Dirección de equipos multidisciplinarios, planeación estratégica y gestión operativa B2B.",
    },
    {
        title: "Data Ecosystems",
        icon: icons.connect,
        items: ["Salesforce", "HubSpot", "Power BI", "Grafana", "Tableau", "GA4"],
        desc: "Integración de ecosistemas CRM y dashboards de monitoreo en tiempo real.",
    },
    {
        title: "AI & Automation",
        icon: icons.spark,
        items: ["LLM Agents", "LangChain", "RAG", "Dify", "n8n", "Make"],
        desc: "Agentes conversacionales y automatización inteligente de ventas y marketing.",
    },
    {
        title: "Infrastructure & Tools",
        icon: icons.layers,
        items: ["Microsoft Office", "Adobe Creative Cloud", "Python", "Next.js", "Docker", "Linux"],
        desc: "Paquetería de productividad, diseño y arquitectura técnica de servidores.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

export default function ExpertiseScene() {
    return (
        <section className="scene" style={{ background: "var(--bg-deep)" }}>
            <div className="glow-blob" style={{
                width: "500px", height: "500px", top: "20%", left: "-10%",
                background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            }} />

            <motion.div
                className="scene-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={cardVariants} className="section-label">
                    <span className="label">Expertise</span>
                </motion.div>

                <motion.h2 variants={cardVariants} className="heading-lg" style={{ marginBottom: "1rem", maxWidth: "600px" }}>
                    Herramientas <span className="text-gradient">tecnológicas</span>
                </motion.h2>

                <motion.p variants={cardVariants} className="body-lg" style={{ marginBottom: "3.5rem", maxWidth: "560px" }}>
                    Las herramientas y metodologías que uso para construir motores de crecimiento desde cero.
                </motion.p>

                <div className="grid-2" style={{ gap: "1.5rem" }}>
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="glass-card"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "1rem" }}>
                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{
                                        width: "48px", height: "48px",
                                        borderRadius: "var(--radius-md)",
                                        background: "rgba(16,185,129,0.06)",
                                        border: "1px solid rgba(16,185,129,0.1)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    {cat.icon}
                                </motion.div>
                                <h3 className="heading-md" style={{ fontSize: "1.25rem" }}>{cat.title}</h3>
                            </div>

                            <p className="body-md" style={{ marginBottom: "1.5rem" }}>{cat.desc}</p>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                                {cat.items.map((item, i) => (
                                    <motion.span
                                        key={i} className="skill-tag"
                                        whileHover={{ y: -1 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
