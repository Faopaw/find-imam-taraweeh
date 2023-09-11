import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import MainNavbar from "../../components/Navbar";

export default function App({ Component, pageProps, router }) {
  return (
    <UserProvider>
      <MainNavbar />
      <Component key={router.pathname} {...pageProps} />
    </UserProvider>
  );
}
