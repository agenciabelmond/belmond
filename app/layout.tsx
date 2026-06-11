import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Belmond",
    template: "%s | Belmond",
  },
  description:
    "Agência de Marketing Digital especializada em performance e branding.",
  keywords: [
    "marketing digital",
    "branding",
    "tráfego pago",
    "social media",
    "Belmond",
  ],
  authors: [{ name: "Belmond" }],
  creator: "Belmond",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  metadataBase: new URL("https://agenciabelmond.com.br"),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans antialiased bg-white text-black
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}