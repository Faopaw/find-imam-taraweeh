import { Suspense } from "react";
import Hero from "../components/Hero";
import Vacancies from "../components/Vacancies";
import { getAllVacancies } from "@/lib/contentful/api";
import Loading from "./loading";

// Enable static generation with ISR - regenerate every hour
export const revalidate = 3600;

export async function VacanciesList() {
  const res = await getAllVacancies();
  return <Vacancies data={res} />;
}

export default async function Home() {
  return (
    <>
      <Hero
        title="All Vacancies"
        description="Use the information below to see all of the current Taraweeh vacancies nationwide"
      />
      <Suspense fallback={<Loading />}>
        <VacanciesList />
      </Suspense>
    </>
  );
}
