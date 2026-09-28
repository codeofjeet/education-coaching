import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gyan Kunj Coaching Centre | Kota",
  description:
    "Gyan Kunj Coaching Centre, Kota provides quality coaching for students from Class 6th to 12th.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}