"use client";

import { motion } from "framer-motion";

const certifications = [
    { name: "Google Ads Certified", issuer: "Google", year: "2023" },
    { name: "Inbound Marketing", issuer: "HubSpot Academy", year: "2022" },
    { name: "AI & Machine Learning", issuer: "DeepLearning.AI", year: "2024" },
    { name: "Salesforce Administrator", issuer: "Salesforce", year: "2021" },
    { name: "SEO Advanced", issuer: "SEMrush Academy", year: "2022" },
    { name: "Data Analytics", issuer: "Google", year: "2023" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CertificationsScene() {
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
                    <span className="label">Certificaciones</span>
                </motion.div>

                <motion.h2 variants={itemVariants} className="heading-lg" style={{ marginBottom: "1rem", maxWidth: "500px" }}>
                    Formación <span className="text-gradient">continua</span>
                </motion.h2>

                <motion.p variants={itemVariants} className="body-lg" style={{ marginBottom: "3rem", maxWidth: "500px" }}>
                    Certificaciones reconocidas por la industria que respaldan mi práctica profesional.
                </motion.p>

                <div className="grid-3" style={{ gap: "1rem" }}>
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="solid-card"
                            whileHover={{ y: -3, borderColor: "rgba(16,185,129,0.15)" }}
                            style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                        >
                            {/* Decorative ring icon */}
                            <div style={{
                                width: "44px", height: "44px", borderRadius: "50%",
                                border: "2px solid rgba(16,185,129,0.2)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0,
                            }}>
                                <div style={{
                                    width: "20px", height: "20px", borderRadius: "50%",
                                    background: "rgba(16,185,129,0.1)",
                                    border: "1.5px solid rgba(16,185,129,0.3)",
                                }} />
                            </div>
                            <div>
                                <h3 style={{
                                    fontFamily: "var(--font-heading)", fontWeight: 600,
                                    fontSize: "0.9375rem", marginBottom: "3px",
                                }}>
                                    {cert.name}
                                </h3>
                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                    {cert.issuer} · {cert.year}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    variants={itemVariants}
                    style={{
                        marginTop: "2rem", fontSize: "0.8125rem", color: "var(--text-muted)",
                        fontStyle: "italic", textAlign: "center", opacity: 0.6,
                    }}
                >
                    * Se actualizará con certificaciones verificadas.
                </motion.p>
            </motion.div>
        </section>
    );
}
