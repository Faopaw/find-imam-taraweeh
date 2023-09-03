import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "../../components/Layout";
import MainNavbar from "../../components/Navbar";
import { AnimatePresence } from "framer-motion";
<script src="https://kit.fontawesome.com/3f9fcc8d29.js" crossorigin="anonymous"></script>


export default function App({ Component, pageProps, router }) {
  <script src="https://kit.fontawesome.com/3f9fcc8d29.js" crossorigin="anonymous"></script>
  return (
    
    <UserProvider>
      <MainNavbar />
      {/* <AnimatePresence  mode="wait"> */}
      {/*initial={false}*/}
        <Component key={router.pathname} {...pageProps} />
        {/* </AnimatePresence> */}
    </UserProvider>
    
  );
}
