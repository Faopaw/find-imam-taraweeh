"use client";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import classes from "../../src/styles/success.module.css";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
import heroImage from "../../public/undraw_astronaut_re_8c33.svg";
import { useRouter } from "next/navigation";

export default function Success() {
   return (
    <main className={classes.main}>
      <div className={classes.dialogbox}>
        <h1 className={classes.h1}>Vacancy Submitted Successfully!</h1>
        <div className={classes.imagecontainer}>
          <Image
            alt="Image of a happy astronaut waving a flag"
            src={heroImage}
            style={{ objectFit: "contain" }}
            fill
            priority
          />
        </div>
        <p className={classes.p}>
          Your details have been submitted and will be processed by our approval
          team.
        </p>
        <Button
          size="lg"
          variant="primary"
          href="/"
          className={classes.buttonstyle}
        >
          Go to Homepage
        </Button>
      </div>

    </main>
  );
}