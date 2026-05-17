import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://raizesdejuripiranga.com"),

  title: {
    default: "Raízes de Juripiranga",
    template: "%s | Raízes de Juripiranga",
  },

  description:
    "Projeto acadêmico sobre a cidade de Juripiranga - PB, explorando sua história, localização, cultura, economia e identidade local.",

  keywords: [
    "Juripiranga",
    "Juripiranga PB",
    "História de Juripiranga",
    "Geografia de Juripiranga",
    "Cultura de Juripiranga",
    "Economia de Juripiranga",
    "Cidade de Juripiranga",
    "Projeto acadêmico",
    "Geografia Paraíba",
  ],

  authors: [{ name: "Vitória Hellem" }, { name: "Alison Barbosa" }],

  creator: "Alison Barbosa",
  publisher: "Raízes de Juripiranga",

  category: "education",

  openGraph: {
    title: "Raízes de Juripiranga",
    description:
      "Conheça a história, cultura, geografia e economia da cidade de Juripiranga - PB.",
    url: "https://raizesdejuripiranga.com",
    siteName: "Raízes de Juripiranga",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raízes de Juripiranga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raízes de Juripiranga",
    description: "Projeto acadêmico sobre a cidade de Juripiranga - PB.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

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
