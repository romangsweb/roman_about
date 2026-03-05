"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
    { number: "4×", label: "Marketing Pipe\nvs Comercial" },
    { number: "10+", label: "Años en\nTech & Marketing" },
    { number: "3-4%", label: "Crecimiento\nInteranual" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function AnimatedBar({ value, delay }: { value: number; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <div ref={ref} style={{ width: "100%", height: "3px", background: "var(--border-subtle)", borderRadius: "2px", marginTop: "8px" }}>
            <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${value}%` } : {}}
                transition={{ duration: 1.2, delay, ease: "easeOut" as const }}
                style={{ height: "100%", background: "var(--accent-gradient)", borderRadius: "2px" }}
            />
        </div>
    );
}

export default function AboutScene() {
    return (
        <section className="scene" style={{ background: "var(--bg-main)" }}>
            <div
                className="glow-blob"
                style={{
                    width: "500px", height: "500px",
                    bottom: "0%", left: "20%",
                    background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
                }}
            />

            <motion.div
                className="scene-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="section-label">
                    <span className="label">Perfil</span>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem", alignItems: "start" }}>
                    {/* Left — Bio */}
                    <motion.div variants={itemVariants}>
                        <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>
                            Donde la creatividad{" "}
                            <span className="text-gradient">encuentra la tecnología</span>
                        </h2>

                        <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
                            Head of Marketing especializado en Generación de Demanda con más de una década en el sector B2B.
                            Mi trabajo vive en la intersección entre pensamiento comercial estratégico y ejecución técnica.
                        </p>
                        <p className="body-md" style={{ marginBottom: "2rem" }}>
                            La tecnología es mi medio para alcanzar el fin empresarial. Integro ecosistemas CRM,
                            diseño estrategias de performance y construyo flujos con IA para garantizar un pipeline escalable.
                            El mejor marketing se construye con bases sólidas de datos y código.
                        </p>

                        {/* Metrics Row */}
                        <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem" }}>
                            {metrics.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                                    style={{ textAlign: "center" }}
                                >
                                    <div className="text-gradient" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "2.5rem", lineHeight: 1 }}>
                                        {m.number}
                                    </div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.5rem", whiteSpace: "pre-line", lineHeight: 1.3 }}>
                                        {m.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Photo + Skills */}
                    <motion.div variants={itemVariants}>
                        {/* Photo */}
                        <div style={{
                            aspectRatio: "3/4", marginBottom: "2rem",
                            background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
                            borderRadius: "var(--radius-lg)", overflow: "hidden",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/roman-profile.jpg"
                                alt="Román García"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    if (target.parentElement) {
                                        target.parentElement.innerHTML = `
                      <div style="text-align:center;color:var(--text-muted);font-size:0.875rem;opacity:0.6">
                        <div style="font-size:2.5rem;margin-bottom:0.5rem">R</div>
                        Román García
                      </div>`;
                                    }
                                }}
                            />
                        </div>

                        {/* Skills */}
                        {[
                            { label: "Estrategia & Dirección", value: 95 },
                            { label: "Gestión de Equipos Multidisciplinarios", value: 95 },
                            { label: "Manejo de Presupuestos", value: 90 },
                            { label: "AI & Automatización", value: 85 },
                            { label: "Arquitectura Técnica", value: 80 },
                        ].map((skill, i) => (
                            <div key={i} style={{ marginBottom: "1.25rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{skill.label}</span>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{skill.value}%</span>
                                </div>
                                <AnimatedBar value={skill.value} delay={i * 0.15} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
