import type { Metadata } from "next";
import { Outfit, Archivo_Black, Syne, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Taushik Chandana | UI/UX & Product Designer",
  description:
    "Minimal editorial UI/UX & Product designer portfolio for Taushik Chandana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${archivoBlack.variable} ${syne.variable} ${spaceGrotesk.variable} ${playfair.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
