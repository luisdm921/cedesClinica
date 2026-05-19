import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cedesclinica.com.mx"),
  title: "CEDES Clínica | Odontología y Armonización Facial",
  description:
    "Citas, tratamientos dentales, armonización facial y medicina estética en Monterrey.",
  openGraph: {
    title: "CEDES Clínica | Odontología y Armonización Facial",
    description:
      "Citas, tratamientos dentales, armonización facial y medicina estética en Monterrey.",
    images: [
      {
        url: "/images/hero/mainLogo.webp",
        width: 1200,
        height: 630,
        alt: "CEDES Clínica",
      },
    ],
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEDES Clínica | Odontología y Armonización Facial",
    description:
      "Citas, tratamientos dentales, armonización facial y medicina estética en Monterrey.",
    images: ["/images/hero/mainLogo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
