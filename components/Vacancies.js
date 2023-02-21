import classes from "./Vacancies.module.css";
import VacancyCard from "./VacancyCard";

function Vacancies(props) {
  const dataArray = JSON.parse(JSON.parse(props.data));
  const cards = dataArray.map((data) => (
    <VacancyCard requireddata={data} />
  ));
  return (
    <>
      <section className={classes.container}>{cards}</section>
    </>
  );
}

export default Vacancies;
