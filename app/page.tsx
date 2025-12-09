import Hero from "../components/Hero";
import Vacancies from "../components/Vacancies";
import { getAllVacancies } from "@/lib/contentful/api";

// Enable static generation with ISR - regenerate every hour
export const revalidate = 3600;

export default async function Home() {
  const res = (await getAllVacancies());

  return (
    <>
      <Hero
        title="All Vacancies"
        description="Use the information below to see all of the current Taraweeh vacancies nationwide"
      />
      <Vacancies data={res} />
    </>
  );
}
