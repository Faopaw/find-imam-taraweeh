import "../src/styles/globals.css";
import React from "react";
import MainNavbar from "../components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Find an Imam - Taraweeh",
  description:
    "List vacancies for Imams and Huffadh to find places to lead Taraweeh prayers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <MainNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
