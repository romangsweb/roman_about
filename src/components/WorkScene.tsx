"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "RAG & Agentes LLM",
        category: "Inteligencia Artificial",
        status: "Activo",
        desc: "Agentes de voz y texto que operan sobre LangChain y Dify. Pipelines de ventas auto-alimentados con IA conversacional.",
        tools: "Python, LangChain, Dify, Linux",
    },
    {
        title: "Motor de Propuestas AI",
        category: "Automatización",
        status: "Producción",
        desc: "Pipeline que construye propuestas dinámicas personalizadas para cada prospecto, acelerando ciclos de cierre con algoritmos ML.",
        tools: "Next.js, CRM API, Python, OpenAI",
    },
    {
        title: "Arquitectura CRM Full-Stack",
        category: "Data Ecosystems",
        status: "Producción",
        desc: "Integración de ecosistemas HubSpot y Salesforce con dashboards de analytics en Grafana para visibilidad en tiempo real.",
        tools: "HubSpot, Salesforce, Grafana, SQL",
    },
    {
        title: "Servidores Autónomos ML",
        category: "Infrastructure",
        status: "Experimental",
        desc: "Servidores Linux que consumen logs propios para entrenar modelos locales de detección, optimizando throughput autónomamente.",
        tools: "Linux, Docker, scikit-learn, Python",
    },
];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
    Activo: { bg: "rgba(52,211,153,0.1)", color: "#34d399", border: "rgba(52,211,153,0.2)" },
    Producción: { bg: "rgba(16,185,129,0.1)", color: "#10b981", border: "rgba(16,185,129,0.2)" },
    Experimental: { bg: "rgba(250,204,21,0.1)", color: "#facc15", border: "rgba(250,204,21,0.2)" },
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function WorkScene() {
    return (
        <section className="scene" style={{ background: "var(--bg-deep)" }}>
            <div className="glow-blob" style={{
                width: "500px", height: "500px", top: "10%", right: "-10%",
                background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            }} />

            <motion.div
                className="scene-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="section-label">
                    <span className="label">Proyectos</span>
                </motion.div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                    <motion.div variants={itemVariants}>
                        <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>
                            Trabajo <span className="text-gradient">destacado</span>
                        </h2>
                        <p className="body-lg" style={{ maxWidth: "480px" }}>
                            Iniciativas de alto impacto donde convergen marketing, tecnología e IA.
                        </p>
                    </motion.div>
                    <motion.a
                        variants={itemVariants}
                        href="https://github.com/romangsweb"
                        target="_blank" rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: "0.625rem 1.5rem", fontSize: "0.8125rem" }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </motion.a>
                </div>

                <div className="grid-2" style={{ gap: "1.5rem" }}>
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass-card"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            {/* Header */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                                <span style={{
                                    fontSize: "0.6875rem", fontFamily: "var(--font-heading)",
                                    fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                                    color: "var(--text-muted)",
                                }}>
                                    {proj.category}
                                </span>
                                <span style={{
                                    fontSize: "0.6875rem", padding: "0.2rem 0.625rem",
                                    borderRadius: "var(--radius-full)",
                                    background: statusColors[proj.status]?.bg,
                                    color: statusColors[proj.status]?.color,
                                    border: `1px solid ${statusColors[proj.status]?.border}`,
                                    fontWeight: 500,
                                }}>
                                    {proj.status}
                                </span>
                            </div>

                            <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>{proj.title}</h3>
                            <p className="body-md" style={{ marginBottom: "1.5rem", flex: 1 }}>{proj.desc}</p>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                                {proj.tools.split(", ").map((t, i) => (
                                    <span key={i} className="skill-tag" style={{ fontSize: "0.75rem", padding: "0.25rem 0.625rem" }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
