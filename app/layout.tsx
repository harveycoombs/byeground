import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
    weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"]
});

const description = "An AI background removal tool.";

export const metadata: Metadata = {
    title: `Byeground · ${process.env.NEXT_PUBLIC_APP_VERSION}`,
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Byeground",
        description: description,
        url: "https://byeground.harveycoombs.com",
        images: [{
            url: "https://byeground.harveycoombs.com/images/splash.jpg",
            width: 1200,
            height: 630,
            alt: "Byeground splash image"
        }],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Byeground",
        description: description,
        creator: "@harveycoombs23"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://byeground.harveycoombs.com" />
            </head>

            <body className={`${inter.className} h-screen bg-white text-gray-800 flex flex-col items-center justify-center`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}