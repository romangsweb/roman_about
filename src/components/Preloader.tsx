"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100vh" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        background: "var(--bg-deep)",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden"
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}
                    >
                        <motion.div
                            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                            transition={{ duration: 1, delay: 0.2, ease: "circInOut" }}
                            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                        >
                            <span style={{ color: "var(--text-primary)" }}>Román</span>
                            <span className="text-gradient">García</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--text-muted)",
                                marginTop: "1rem"
                            }}
                        >
                            Loading Experience
                        </motion.div>
                    </motion.div>

                    {/* Progress Bar Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            position: "absolute",
                            bottom: "20%",
                            width: "200px",
                            height: "2px",
                            background: "var(--border-subtle)",
                            borderRadius: "2px",
                            overflow: "hidden"
                        }}
                    >
                        {/* Progress Bar Fill */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "var(--accent-gradient)",
                                borderRadius: "2px"
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
