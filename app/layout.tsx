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
  description: "Agência de Marketing Digital especializada em performance e branding.",
  keywords: [
    "marketing digital",
    "branding",
    "tráfego pago",
    "social media",
    "Belmond",
  ],
  authors: [{ name: "Belmond" }],
  creator: "Belmond",
  
  // Logo/Favicon da aba
  icons: {
    icon: "/logo-belmond.png",
    shortcut: "/logo-belmond.png",
    apple: "/logo-belmond.png",
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
      <body>
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans antialiased bg-white text-black
        `}
      <!-- Meta Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window, document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '2082969819016692');

fbq('track', 'PageView');

</script>

<noscript><img height="1" width="1" style="display:none"

src="https://www.facebook.com/tr?id=2082969819016692&ev=PageView&noscript=1"

/></noscript>

<!-- End Meta Pixel Code --> 
        {children}
        <Analytics />
      </body>
    </html>
  );
}
