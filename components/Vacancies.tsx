import VacancyCard from "./VacancyCard";
import { VacanciesProps, ContentfulEntry } from "../types";

function Vacancies(props: VacanciesProps) {
  const dataArray: ContentfulEntry[] = JSON.parse(JSON.parse(props.data));
  const cards = dataArray.map((data, index) => (
    <VacancyCard requireddata={data} key={index} />
  ));
  return (
    <>
      <section className="m-8 grid items-center justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-2.5 gap-y-8 sm:pt-12 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3">
        {cards}
      </section>
    </>
  );
}

export default Vacancies;