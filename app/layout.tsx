import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://raizes-de-juripiranga.vercel.app"),

  title: {
    default: "Raízes de Juripiranga",
    template: "%s | Raízes de Juripiranga",
  },

  description:
    "Conheça Juripiranga (PB) por meio de um acervo completo sobre sua história, geografia, cultura, economia, urbanização e meio ambiente.",

  keywords: [
    "Juripiranga",
    "Juripiranga PB",
    "Juripiranga Paraíba",
    "Cidade de Juripiranga",
    "Município de Juripiranga",

    "História de Juripiranga",
    "Origem de Juripiranga",
    "Fundação de Juripiranga",
    "Emancipação de Juripiranga",

    "Geografia de Juripiranga",
    "Localização de Juripiranga",
    "População de Juripiranga",
    "Mapa de Juripiranga",

    "Economia de Juripiranga",
    "Agricultura de Juripiranga",
    "Comércio de Juripiranga",

    "Cultura de Juripiranga",
    "São João de Juripiranga",
    "Festa de São Sebastião",
    "Chapéu de Palha",
    "Cidade do Chapéu de Palha",

    "Urbanização de Juripiranga",
    "Meio Ambiente de Juripiranga",

    "Vale do Paraíba",
    "Mata Paraibana",
    "Paraíba",
  ],

  authors: [{ name: "Vitória Hellem" }, { name: "Alison Barbosa" }],

  creator: "Alison Barbosa",
  publisher: "Raízes de Juripiranga",

  category: "education",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
