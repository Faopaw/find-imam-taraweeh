import Hero from "../components/Hero";
import Vacancies from "../components/Vacancies";
import {fetchAllData , fetchDataById} from '../utils/fetchDataNeon'

// Enable static generation with ISR - regenerate every hour
export const revalidate = 3600;

export default async function Home() {
  const res = await fetchAllData("vacancies");

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
