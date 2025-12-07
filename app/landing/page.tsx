"use client";

import { Button } from "react-bootstrap";
import Image from "next/image";
import heroImage from "../../public/muslimhero.jpg";
import searchImage from "../../public/undraw_the_search_s0xf.svg";
import problemsoveImage from "../../public/undraw_problem_solving_re_4gq3.svg";
import { FaTreeCity } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Landing() {
  return (
    <>
      <IconContext.Provider
        value={{
          color: "rgb(25,25,112)",
          className: "global-class-name",
          size: "1.3em",
        }}
      >
        <main className="flex flex-col items-center w-full h-screen mt-12 bg-background text-foreground md:mt-4 xl:flex-row xl:items-center">
          <div className="text-foreground text-center flex flex-col items-center gap-4 max-w-[80%] md:max-w-[50%] md:ml-8 md:justify-center xl:text-left xl:items-start">
            <h1 className="font-semibold largeheading">
              No Imam to lead prayers? No Problem.
            </h1>
            <p>
              FIT Provides a modern solution to the problem of finding an
              appropriate candidate to have the honour of leading prayers. FIT
              aims to be the platform that covers the entire UK and all its
              mosques.
            </p>
            <div className="flex flex-row gap-4">
              <Button variant="info" href="/register">
                Get Started !
              </Button>
              <Button variant="warning">About Us</Button>
            </div>
          </div>
          <div className="hidden xl:flex xl:justify-center xl:items-center xl:overflow-hidden xl:m-4 xl:w-[700px] xl:h-[400px] xl:relative">
            <Image
              alt="Image of a mosque carpet with a quran on a wooden desk in the center of the image"
              src={heroImage}
              style={{ objectFit: "cover" }}
              fill
              priority
            ></Image>
          </div>
        </main>
        <section className="flex flex-col w-screen h-auto justify-center items-center">
          {/* This section talks about the features and benefits off the App */}
          <div className="flex flex-col items-center justify-center text-center max-w-[70%] mb-20 gap-12 md:flex-row md:items-start md:justify-center md:gap-4 md:text-left md:max-w-[80%] md:mb-24">
            {/* Main features */}
            <div className="md:min-w-[300px] md:w-[320px]">
              <h5 className="subheading">
                <FaTreeCity /> Complete coverage
              </h5>
              <p>
                with 77 cities containing over 1200+ mosques, FIT aims to
                provide coverage for the muslim communities throughout the
                nation.
              </p>
            </div>
            <div className="md:min-w-[300px] md:w-[320px]">
              <h5 className="subheading">
                <FaHandshakeSimple /> Ensured reliability
              </h5>
              <p>
                Our services are avalable 24/7, all year round to suit your
                needs. Never stress about finding an Imam even if on a short
                notice. We have you covered.
              </p>
            </div>
            <div className="md:min-w-[300px] md:w-[320px]">
              <h5 className="subheading">
                <FaThumbsUp /> Easy to use
              </h5>
              <p>
                Our user interface is designed to be straightforward and easy to
                use. No ads, no unnecesary extra bits. Just what you need at
                your fingertips.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-w-[70%] mb-20 md:mt-8">
            {/* Some benefits with Images */}
            <div className="flex flex-col items-center justify-center md:flex-row md:text-left md:mb-20">
              <div>
                <h3 className="subheading">
                  Quickly Find what you need
                </h3>
                <p className="max-w-full md:max-w-[70%]">
                  WIth our platform serving around 3 million muslims with over
                  1200 mosques, you are sure to find what you are looking for.
                  FIT provides you with the tools to find an Imam and the
                  channels to communicate efficiently.
                </p>
              </div>
              <div className="hidden md:block md:relative md:min-w-[300px] md:min-h-[300px]">
                <Image
                  alt="Image of a person looking for something on a giant mobile phone with a magnifying glass"
                  src={searchImage}
                  fill
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row md:text-left md:mb-20">
              <div>
                <h3 className="subheading">
                  Modern Problem, Modern Solution
                </h3>
                <p className="max-w-full md:max-w-[70%]">
                  Ordinarilly people would try to solve this problem via word of
                  mouth or circulating whattsapp messages. That method is
                  frankly outdated and limited. You can only be contacted by
                  those who recieve the message while you are completely unaware
                  of them. We aim to solve that problem once and for all.
                </p>
              </div>
              <div className="hidden md:block md:relative md:min-w-[300px] md:min-h-[300px]">
                <Image
                  alt="Image of somebody solving a problem"
                  src={problemsoveImage}
                  fill
                  priority
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-screen h-auto justify-center items-center md:flex-row">
          {/* Some social proof - testimonials etc */}
          <div className="flex flex-col items-center justify-center text-center max-w-[75%] mb-20 md:flex-row md:flex-wrap md:max-w-[80%] md:text-left">
            <div className="rounded-[var(--radius)] p-8 m-8 bg-card text-card-foreground border border-border shadow-[0px_10px_20px_-3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap md:m-4 md:w-[300px] md:min-w-[270px] md:items-start md:justify-start md:text-left">
              {/* <h3 className="subheading">Social proof #1</h3> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                justo risus, malesuada sed ligula non, porta ullamcorper diam.
                Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
                pretium augue. Nullam.
              </p>
              {/* icon goes here */}
              <div className="w-[50px] h-[50px] rounded-full bg-[brown] border border-[salmon] mt-4 mb-4"></div>
              <h5>Fulan ibn Fulan</h5>
              <h6>CEO - Amazon</h6>
            </div>
            <div className="rounded-[var(--radius)] p-8 m-8 bg-card text-card-foreground border border-border shadow-[0px_10px_20px_-3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap md:m-4 md:w-[300px] md:min-w-[270px] md:items-start md:justify-start md:text-left">
              {/* <h3 className="subheading">Social proof #2</h3> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                justo risus, malesuada sed ligula non, porta ullamcorper diam.
                Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
                pretium augue. Nullam.
              </p>
              <div className="w-[50px] h-[50px] rounded-full bg-[brown] border border-[salmon] mt-4 mb-4"></div>
              <h5>Fulan ibn Fulan</h5>
              <h6>CEO - Amazon</h6>
            </div>
            <div className="rounded-[var(--radius)] p-8 m-8 bg-card text-card-foreground border border-border shadow-[0px_10px_20px_-3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap md:m-4 md:w-[300px] md:min-w-[270px] md:items-start md:justify-start md:text-left">
              {/* <h3 className="subheading">Social proof #3</h3> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                justo risus, malesuada sed ligula non, porta ullamcorper diam.
                Aliquam consectetur eros sem. Aliquam erat volutpat. Sed eget
                pretium augue. Nullam.
              </p>
              <div className="w-[50px] h-[50px] rounded-full bg-[brown] border border-[salmon] mt-4 mb-4"></div>
              <h5>Fulan ibn Fulan</h5>
              <h6>CEO - Amazon</h6>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center text-center gap-8 mb-12">
          <h2>Need an Imam? Find one here!</h2>
          <Button variant="info" href="/register">
            Click here
          </Button>
        </section>
      </IconContext.Provider>
    </>
  );
}