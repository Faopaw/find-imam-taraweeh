"use client";

import Button from "react-bootstrap/Button";
import Image from "next/image";
import heroImage from "../../public/undraw_astronaut_re_8c33.svg";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const searchParams = useSearchParams();
  const pincode = searchParams.get("pincode");
  const id = searchParams.get("id");

  return (
    <main className="flex flex-row items-center justify-center w-screen h-screen bg-background">
      <div className="flex flex-col items-center justify-center text-center bg-card text-card-foreground w-full h-full min-w-[400px] p-8 px-16 rounded-[var(--radius)] border border-border sm:w-[60%] sm:h-auto">
        <h1 className="text-foreground pb-8">
          Vacancy Submitted Successfully!
        </h1>
        <p className="text-muted-foreground pb-8 text-xl">
          Your details have been submitted and will be processed by our approval
          team.
        </p>
        <div className="flex justify-center items-center overflow-hidden m-4 w-[300px] h-[300px] relative">
          <Image
            alt="Image of a happy astronaut waving a flag"
            src={heroImage}
            style={{ objectFit: "contain" }}
            fill
            priority
          />
        </div>
        <p className="text-muted-foreground pb-8 text-xl">
          Once approved, you can remove the vacancy by visiting:{" "}
          <a
            href={`/edit/${id}`}
            className="text-primary underline"
          >{`find-taraweeh-imam.com/edit/${id}`}</a>
        </p>
        <p className="text-muted-foreground pb-8 text-xl">
          Your unique pincode is: {pincode}
        </p>
        <p className="text-muted-foreground pb-8 text-xl">
          You will need this pincode to remove the vacancy.
        </p>
        <Button
          size="lg"
          variant="primary"
          href="/"
          className="bg-primary text-primary-foreground border-none p-2.4 w-full rounded-[var(--radius)] sm:w-[80%] sm:max-w-[500px]"
        >
          Go to Homepage
        </Button>
      </div>
    </main>
  );
}
