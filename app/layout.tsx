import "../src/styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import MainNavbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find an Imam - Taraweeh",
  description: "Find an Imam to lead Taraweeh prayers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <MainNavbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}