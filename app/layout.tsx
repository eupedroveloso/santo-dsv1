import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

// Fonte do Santo DS. Albert Sans é variável (100–900), então dispensa
// `weight` — os seis pesos do DS saem todos de um arquivo só.
const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santo DS — Documentação",
  description:
    "Fundações do Santo Design System: tipografia, espaçamento, stroke e ícones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
