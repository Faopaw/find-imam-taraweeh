import classes from "./Vacancies.module.css";
import VacancyCard from "./VacancyCard";
import { VacanciesProps, ContentfulEntry } from "../types";

function Vacancies(props: VacanciesProps) {
  const dataArray: ContentfulEntry[] = JSON.parse(JSON.parse(props.data));
  const cards = dataArray.map((data, index) => (
    <VacancyCard requireddata={data} key={index} />
  ));
  return (
    <>
      <section className={classes.container}>{cards}</section>
    </>
  );
}

export default Vacancies;