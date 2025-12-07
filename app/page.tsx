import Hero from "../components/Hero";
import Vacancies from "../components/Vacancies";
import loadData from "../utils/loadData";

export default async function Home() {
  const res = await loadData();
  // In Pages Router, getStaticProps double-stringified the data
  // To maintain compatibility with Vacancies component, we need to stringify once more
  const returnArray = JSON.stringify(res);
  
  return (
    <>
      <Hero />
      <Vacancies data={returnArray} />
    </>
  );
}