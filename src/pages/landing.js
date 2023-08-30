import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MainNavbar from "../../components/Navbar";
import Image from "next/image";
import classes from "../styles/landing.module.css";
import heroImage from "../../public/heroimage.jpg"

export default function Landing() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.herotext}>
          <h1 className={classes.h1}>No Imam? No Problem.</h1>
          <p className={classes.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis risus justo, non rhoncus felis rhoncus sit amet. Vivamus in
            augue quis augue vestibulum gravida. Morbi nec leo consectetur,
            malesuada ligula ut, malesuada erat. Morbi sit amet faucibus purus.
            Nam.
          </p>
          <div className={classes.buttoncontianer}>
            <Button variant="info">Find an Imam</Button>
            <Button variant="warning">About Us</Button>
          </div>
        </div>
        <div className={classes.imagecontianer}>
          <Image
            alt="Image of a mosque carpet with a quran on a wooden desk in the center of the image"
            src={heroImage}
            width={800}
            height={500}
          ></Image>
        </div>
      </main>
      <section></section>
    </>
  );
}
