import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "../../components/Layout";
import MainNavbar from "../../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
    <MainNavbar />
      <Component {...pageProps} />
    </UserProvider>
  );
}
