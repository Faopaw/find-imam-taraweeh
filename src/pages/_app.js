import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "../../components/Layout";
import MainNavbar from "../../components/Navbar";
import { AnimatePresence } from "framer-motion";

// import { config } from '@fontawesome/fontawesome-svg-core'
// import '@fontawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
// TODO - fix later

export default function App({ Component, pageProps, router }) {
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
