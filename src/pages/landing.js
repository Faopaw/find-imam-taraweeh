import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import MainNavbar from "../../components/Navbar";
import Image from "next/image";
import classes from "../styles/landing.module.css";
import heroImage from "../../public/heroimage.jpg";
// import { FaTreeCity } from "react-icons/fa6";


export default function Landing() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.herotext}>
          <h1 className={classes.h1}>No Imam to lead prayers? No Problem.</h1>
          {/* TODO - might need to wrap the above h1 */}
          <p className={classes.p}>
            FIT Provides a modern solution to the problem of finding an
            appropriate candidate to have the honour of leading prayers. FIT
            aims to be the platform that covers the entire UK and all its
            mosques.
          </p>
          <div className={classes.buttoncontianer}>
            <Button variant="info" href="/register">
              Find an Imam
            </Button>
            <Button variant="warning">About Us</Button>
          </div>
        </div>
        <div className={classes.imagecontianer}>
          <Image
            alt="Image of a mosque carpet with a quran on a wooden desk in the center of the image"
            src={heroImage}
            fill
            priority
          ></Image>
        </div>
      </main>
      <section className={classes.features}>
        {/* This section talks about the features and benefits off the App */}
        <div className={classes.mainfeatures}>
          {/* Main features */}
          <div>
            {/* Icon goes here */}
            <img>{/* Icon goes here */}</img>
            <h4>Complete Coverage</h4>
            <p1>
              with 77 cities containing over 1200+ mosques, FIT provides
              coverage for the entire UK.with 77 cities containing over 1200+ mosques, FIT provides
              coverage for the entire UK.
            </p1>
            {/* TODO - a little display image could go here of the quote author */}
          </div>
          <div>
            <img></img>
            {/* <FaTreeCity></FaTreeCity> */}
            <FontAwesomeIcon icon="fa-solid fa-tree-city" />
            <h4>Complete Coverage</h4>
            <p1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              justo risus, malesuada sed ligula non, porta ullamcorper diam.
              Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
              pretium augue. Nullam.
            </p1>
          </div>
          <div>
            <img>{/* Icon goes here */}</img>
            <h4>Complete Coverage</h4>
            <p1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              justo risus, malesuada sed ligula non, porta ullamcorper diam.
              Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
              pretium augue. Nullam.
            </p1>
          </div>
        </div>
        <div className={classes.benefits}>
          {/* Some benefits with Images */}
          <div className={classes.singlebenefit}>
            <div>
              <h2>Some benefit #1</h2>
              <p className={classes.benefittext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas volutpat sem ut neque malesuada, a commodo odio
                faucibus. Curabitur id enim fermentum, lobortis sem eu, congue
                metus. Donec consequat risus id erat ultricies congue. Aenean ac
                orci non orci tempor finibus ut id orci. Aliquam id magna
                libero. Nunc at.
              </p>
            </div>
            <div className={classes.benefitimage}>
              <Image></Image>
            </div>
          </div>
          <div className={classes.singlebenefit}>
            <div>
              <h2>Some benefit #2</h2>
              <p className={classes.benefittext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas volutpat sem ut neque malesuada, a commodo odio
                faucibus. Curabitur id enim fermentum, lobortis sem eu, congue
                metus. Donec consequat risus id erat ultricies congue. Aenean ac
                orci non orci tempor finibus ut id orci. Aliquam id magna
                libero. Nunc at.
              </p>
            </div>
            <div className={classes.benefitimage}>
              <Image></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.socialproof}>
        {/* Some social proof - testimonials etc */}
        <div className={classes.statements}>
          <div>
            <h3>Social proof #1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              justo risus, malesuada sed ligula non, porta ullamcorper diam.
              Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
              pretium augue. Nullam.
            </p>
            {/* icon goes here */}
            <div className={classes.quotepic}></div>
            <h5>Fulan ibn Fulan</h5>
            <h6>CEO - Amazon</h6>
          </div>
          <div>
            <h3>Social proof #2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              justo risus, malesuada sed ligula non, porta ullamcorper diam.
              Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
              pretium augue. Nullam.
            </p>
            <div className={classes.quotepic}></div>
            <h5>Fulan ibn Fulan</h5>
            <h6>CEO - Amazon</h6>
          </div>
          <div>
            <h3>Social proof #3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              justo risus, malesuada sed ligula non, porta ullamcorper diam.
              Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
              pretium augue. Nullam.
            </p>
            <div className={classes.quotepic}></div>
            <h5>Fulan ibn Fulan</h5>
            <h6>CEO - Amazon</h6>
          </div>
        </div>
      </section>
      <section className={classes.finalcta}>
        <h2>Need an Imam? Find one here!</h2>
        <Button variant="info" href="/register">
          Click here
        </Button>
      </section>
    </>
  );
}
