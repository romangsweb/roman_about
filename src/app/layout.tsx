import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Román García | Creative Technologist & Marketing Architect",
  description:
    "Head of Marketing con experiencia en empresas de tecnología. Combino estrategia de crecimiento, IA y arquitectura técnica para escalar ingresos B2B.",
  keywords: ["marketing", "technologist", "AI", "B2B", "growth", "CRM", "automation"],
  authors: [{ name: "Román García" }],
  openGraph: {
    title: "Román García | Creative Technologist & Marketing Architect",
    description:
      "Construyo motores de crecimiento que combinan estrategia, datos y tecnología.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        style={{
          backgroundColor: "var(--bg-deep)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
