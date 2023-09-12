import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import classes from "../styles/success.module.css";
// import useWindowSize from 'react-use/lib/useWindowSize';
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
import heroImage from "../../public/undraw_astronaut_re_8c33.svg";

export default function Success() {
  const [pieces, setPieces] = useState(300);
  const [width, height] = useWindowSize();

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 4000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  const router = useRouter();

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.main}
    >
      <div className={classes.dialogbox}>
        <h1 className={classes.h1}>Registration Successful!</h1>
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
      <Confetti
        width={width}
        height={height}
        gravity={0.2}
        numberOfPieces={pieces}
      />
    </m.main>
  );
}
