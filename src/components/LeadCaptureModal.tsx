"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose, onSuccess }: LeadCaptureModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Call our new Next.js Server Route instead of an external webhook, respecting basePath
            const response = await fetch('/about_roman/api/send-cv', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
            });

            if (!response.ok) {
                console.warn("Error enviando el correo, pero se procederá a imprimir el PDF.");
            }

            // Simulate slight delay for UX
            await new Promise(resolve => setTimeout(resolve, 800));

            onSuccess();
            onClose();
            // Trigger PDF print dialog shortly after modal closes
            setTimeout(() => {
                window.print();
            }, 300);

            // Reset form
            setName("");
            setEmail("");
        } catch (err) {
            setError("Algo salió mal. Por favor, inténtalo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 99999, padding: "1rem"
                }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                            background: "rgba(8, 8, 12, 0.8)", backdropFilter: "blur(8px)",
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="solid-card"
                        style={{
                            position: "relative", width: "100%", maxWidth: "420px",
                            padding: "2.5rem", border: "1px solid var(--border-accent)",
                            boxShadow: "var(--shadow-lg), var(--shadow-glow)",
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: "absolute", top: "1.25rem", right: "1.25rem",
                                background: "transparent", border: "none", color: "var(--text-muted)",
                                cursor: "pointer", padding: "0.25rem", display: "flex"
                            }}
                            aria-label="Cerrar modal"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div style={{ marginBottom: "2rem" }}>
                            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                                <span className="label">Acceso Total</span>
                            </div>
                            <h3 className="heading-md" style={{ marginBottom: "0.5rem" }}>
                                Descargar Perfil en PDF
                            </h3>
                            <p className="body-md" style={{ fontSize: "0.875rem" }}>
                                Déjame tu correo para conectar y obtén al instante la versión estructurada y optimizada para lectura de mi experiencia.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div>
                                <label htmlFor="name" style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-heading)", color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Tu nombre"
                                    style={{
                                        width: "100%", padding: "0.75rem 1rem",
                                        background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-medium)",
                                        borderRadius: "var(--radius-sm)", color: "var(--text-primary)",
                                        fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                                        outline: "none", transition: "border-color 0.2s"
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "var(--accent-primary)"}
                                    onBlur={(e) => e.target.style.borderColor = "var(--border-medium)"}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-heading)", color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="hola@ejemplo.com"
                                    style={{
                                        width: "100%", padding: "0.75rem 1rem",
                                        background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-medium)",
                                        borderRadius: "var(--radius-sm)", color: "var(--text-primary)",
                                        fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                                        outline: "none", transition: "border-color 0.2s"
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "var(--accent-primary)"}
                                    onBlur={(e) => e.target.style.borderColor = "var(--border-medium)"}
                                />
                            </div>

                            {error && (
                                <div style={{ color: "#ef4444", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary"
                                style={{
                                    marginTop: "1rem", width: "100%", justifyContent: "center",
                                    opacity: isLoading ? 0.7 : 1, cursor: isLoading ? "wait" : "pointer"
                                }}
                            >
                                {isLoading ? "Generando PDF..." : "Generar Documento PDF"}
                            </button>
                            <p style={{ textAlign: "center", fontSize: "0.6875rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                                Se enviará a través de un workflow automatizado.
                            </p>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
