import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ProductProvider } from "@/hooks/products";
import { UserProvider } from "@/hooks/user";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Electric Wheelbarrow Dumpers Manufacturer in India | MaxBeton",
    template: "%s | MaxBeton",
  },
  description:
    "MaxBeton is India’s leading manufacturer of electric wheelbarrow dumpers. Discover eco-friendly, powerful, and efficient solutions for construction and industrial needs. Delivered across India.",
  keywords: [
    "electric wheelbarrow dumper",
    "wheelbarrow dumper manufacturer India",
    "electric construction wheelbarrow",
    "battery-powered dumper",
    "electric dump cart India",
    "MaxBeton wheelbarrow",
    "eco-friendly construction equipment",
    "electric site dumper",
    "electric mini dumper India",
    "MaxBeton machinery",
    "MaxBeton",
  ],
  metadataBase: new URL("https://www.maxbeton.in"),
  openGraph: {
    title: "Electric Wheelbarrow Dumpers Manufacturer in India | MaxBeton",
    description:
      "Explore MaxBeton’s range of electric wheelbarrow dumpers — engineered for performance, durability, and eco-efficiency. Proudly made in India with nationwide delivery.",
    url: "https://www.maxbeton.in/products",
    siteName: "MaxBeton",
    images: [
      {
        url: "/Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "Electric Wheelbarrow Dumper by MaxBeton",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Wheelbarrow Dumpers Manufacturer in India | MaxBeton",
    description:
      "MaxBeton manufactures advanced electric wheelbarrow dumpers — perfect for modern construction and industrial projects across India.",
  },
  authors: [{ name: "MaxBeton Team", url: "https://maxbeton.in/about" }],
  creator: "MaxBeton Team",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRQ72V1Q7F"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MRQ72V1Q7F');
        `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ProductProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </ProductProvider>
        </UserProvider>
      </body>
    </html>
  );
}
