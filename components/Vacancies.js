import classes from "./Vacancies.module.css";
import VacancyCard from "./VacancyCard";

export default function Vacancies() {
    const DUMMY_DATA = [
        {
            city: "Nottingham",
            address : "12 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"
        },
        {
            city: "Birmingham",
            address : "156662 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"    
        },
        {
            city: "London",
            address : "1222 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"    
        },
        {
            city: "Birmingham",
            address : "12 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"    
        },
        {
            city: "Nottingham",
            address : "12 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"
        },
        {
            city: "Birmingham",
            address : "156662 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"    
        },
        {
            city: "London",
            address : "1222 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"    
        },
        {
            city: "Birmingham",
            address : "12 Money Street",
            requirements : "N/A",
            contactname : "Ali Tyson",
            contactnumber : "07725552666",
            extradetails : "N/A"    
        }
    ];
    const dummydata = DUMMY_DATA[0]
    return (
        <>
            <section className={classes.container}>
                <VacancyCard dummydata = {dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
                <VacancyCard dummydata={dummydata}/>
            </section>
        </>
    )
}