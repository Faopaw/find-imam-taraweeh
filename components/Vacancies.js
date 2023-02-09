import classes from "./Vacancies.module.css";
import VacancyCard from "./VacancyCard";

export default function Vacancies() {
    return (
        <>
            <section className={classes.container}>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </section>
        </>
    )
}