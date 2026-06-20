import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A&S Logistics and General Merchandise | Fleet Management & Cold Chain Logistics",
  description: "Indigenous Third-Party Logistics (3PL) company specializing in fleet management, last-mile delivery of health commodities (cold chain & non-cold chain), and merchandise transport across Jigawa, Abuja, Bauchi, Yobe, Gombe, and Maiduguri.",
  keywords: "logistics, fleet management, cold chain logistics, health commodities, Jigawa logistics, northern nigeria logistics, A&S logistics, haulage nigeria, third party logistics",
  authors: [{ name: "A&S Logistics & General Merchandise" }],
  openGraph: {
    title: "A&S Logistics and General Merchandise",
    description: "Premium, indigenous Fleet Management and Last-Mile Health Commodity Logistics in Northern Nigeria.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
