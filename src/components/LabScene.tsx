"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiments = [
    {
        title: "Agente Conversacional para Ventas B2B",
        category: "AI Agent",
        status: "Activo",
        readTime: "5 min",
        description: "Agente RAG que califica leads y agenda demos automáticamente vía WhatsApp y web chat.",
        challenge: "Equipos de ventas perdían horas respondiendo preguntas repetitivas y calificando leads manualmente.",
        solution: "Agente con LangChain + RAG que accede a la base de conocimiento y califica leads con scoring personalizado.",
        stack: ["LangChain", "Python", "FastAPI", "Dify"],
        results: [
            { metric: "60%", label: "Menos tiempo de respuesta" },
            { metric: "40%", label: "Leads auto-calificados" },
            { metric: "24/7", label: "Disponibilidad" },
        ],
    },
    {
        title: "Dashboard de Analytics en Tiempo Real",
        category: "Data Viz",
        status: "Producción",
        readTime: "4 min",
        description: "Stack completo de monitoreo con Grafana para visualización de métricas de marketing en tiempo real.",
        challenge: "Reportes de marketing manuales con retraso, impidiendo toma de decisiones ágil.",
        solution: "Stack de Grafana + PostgreSQL + Python scrapers que alimentan dashboards actualizados cada 5 minutos.",
        stack: ["Grafana", "PostgreSQL", "Python", "Docker"],
        results: [
            { metric: "80%", label: "Menos reportes manuales" },
            { metric: "5min", label: "Ciclo de actualización" },
            { metric: "12+", label: "Dashboards desplegados" },
        ],
    },
    {
        title: "Generador de Propuestas con IA",
        category: "Automation",
        status: "Activo",
        readTime: "6 min",
        description: "Sistema que genera propuestas comerciales personalizadas automáticamente desde datos del CRM.",
        challenge: "Crear propuestas personalizadas tomaba 2-3 días por prospecto.",
        solution: "Pipeline que extrae datos del CRM, los procesa con OpenAI y genera documentos personalizados en PDF.",
        stack: ["Next.js", "OpenAI API", "Python", "CRM API"],
        results: [
            { metric: "2×", label: "Más rápido" },
            { metric: "95%", label: "Tasa personalización" },
            { metric: "30+", label: "Propuestas/mes" },
        ],
    },
    {
        title: "Sistema de Defensa ML Auto-Aprendizaje",
        category: "Security · ML",
        status: "Experimental",
        readTime: "7 min",
        description: "Servidor que consume sus propios logs para entrenar modelos de detección de anomalías de forma autónoma.",
        challenge: "Servidores con intentos de intrusión sin detección proactiva.",
        solution: "Sistema que ingiere logs, entrena modelos de anomalía con scikit-learn y se auto-actualiza cada 24h.",
        stack: ["Linux", "Docker", "scikit-learn", "Python"],
        results: [
            { metric: "24h", label: "Auto-actualización" },
            { metric: "98%", label: "Precisión detección" },
            { metric: "0", label: "Intrusiones exitosas" },
        ],
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

function ExperimentCard({ exp }: { exp: typeof experiments[0] }) {
    const [isOpen, setIsOpen] = useState(false);
    const status = statusColors[exp.status] || statusColors.Activo;

    return (
        <motion.article
            variants={itemVariants}
            layout
            className="glass-card"
            style={{ padding: 0, cursor: "pointer", overflow: "hidden" }}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Card Header */}
            <div style={{ padding: "1.75rem 2rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <span style={{
                            fontSize: "0.6875rem", fontFamily: "var(--font-heading)",
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            color: "var(--text-muted)", fontWeight: 500,
                        }}>
                            {exp.category}
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                            {exp.readTime}
                        </span>
                    </div>
                    <span style={{
                        fontSize: "0.6875rem", padding: "0.2rem 0.625rem",
                        borderRadius: "var(--radius-full)",
                        background: status.bg, color: status.color, border: `1px solid ${status.border}`, fontWeight: 500,
                    }}>
                        {exp.status}
                    </span>
                </div>

                <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>{exp.title}</h3>
                <p className="body-md">{exp.description}</p>
            </div>

            {/* Separator + Expand */}
            <div style={{
                padding: "0.75rem 2rem",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                    {exp.stack.slice(0, 3).map((s, i) => (
                        <span key={i} className="skill-tag" style={{ fontSize: "0.6875rem", padding: "0.2rem 0.5rem" }}>{s}</span>
                    ))}
                    {exp.stack.length > 3 && (
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>+{exp.stack.length - 3}</span>
                    )}
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ color: "var(--accent-primary)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" as const }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{ padding: "0 2rem 2rem", borderTop: "1px solid var(--border-subtle)" }}>
                            {/* Challenge / Solution */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ padding: "1.25rem", borderRadius: "var(--radius-md)", background: "rgba(250,204,21,0.03)", border: "1px solid rgba(250,204,21,0.08)" }}>
                                    <div style={{ fontSize: "0.6875rem", color: "#facc15", fontWeight: 600, fontFamily: "var(--font-heading)", letterSpacing: "0.1em", marginBottom: "8px", textTransform: "uppercase" }}>
                                        Desafío
                                    </div>
                                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{exp.challenge}</p>
                                </div>
                                <div style={{ padding: "1.25rem", borderRadius: "var(--radius-md)", background: "rgba(16,185,129,0.03)", border: "1px solid rgba(16,185,129,0.08)" }}>
                                    <div style={{ fontSize: "0.6875rem", color: "#10b981", fontWeight: 600, fontFamily: "var(--font-heading)", letterSpacing: "0.1em", marginBottom: "8px", textTransform: "uppercase" }}>
                                        Solución
                                    </div>
                                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{exp.solution}</p>
                                </div>
                            </div>

                            {/* Results */}
                            <div style={{
                                display: "flex", gap: "2rem", justifyContent: "space-between",
                                padding: "1.25rem 1.5rem", borderRadius: "var(--radius-md)",
                                background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", marginBottom: "1.5rem",
                            }}>
                                {exp.results.map((r, i) => (
                                    <div key={i} style={{ textAlign: "center", flex: 1 }}>
                                        <div className="text-gradient" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.75rem", marginBottom: "4px" }}>
                                            {r.metric}
                                        </div>
                                        <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", lineHeight: 1.3 }}>{r.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Full Stack */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                                {exp.stack.map((s, i) => (
                                    <span key={i} className="skill-tag">{s}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}

export default function LabScene() {
    return (
        <section className="scene" style={{ background: "var(--bg-deep)", minHeight: "auto", paddingBottom: "4rem" }}>
            <div className="glow-blob" style={{
                width: "500px", height: "500px", top: "10%", right: "-15%",
                background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
            }} />

            <motion.div
                className="scene-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="section-label">
                    <span className="label">Lab</span>
                </motion.div>

                <motion.h2 variants={itemVariants} className="heading-lg" style={{ marginBottom: "1rem", maxWidth: "600px" }}>
                    Experimentos <span className="text-gradient">& casos de uso</span>
                </motion.h2>

                <motion.p variants={itemVariants} className="body-lg" style={{ marginBottom: "3rem", maxWidth: "560px" }}>
                    Proyectos personales donde exploro las fronteras de marketing, IA e infraestructura.
                    Click en cada caso para ver el estudio completo.
                </motion.p>

                <div className="grid-2" style={{ gap: "1.5rem" }}>
                    {experiments.map((exp, idx) => (
                        <ExperimentCard key={idx} exp={exp} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
