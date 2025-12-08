import VacancyCard from "./VacancyCard";
import { VacanciesProps } from "../types";

function Vacancies({ data }: VacanciesProps) {
  const cards = data.map(({ fields, sys }) => {
    return (
      <VacancyCard
        requireddata={{ fields, sys }}
        key={sys.id}
      />
    );
  });
  return (
    <>
      <section className="m-8 grid items-center justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-2.5 gap-y-8 sm:py-8 sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-3">
        {cards}
      </section>
    </>
  );
}

export default Vacancies;
