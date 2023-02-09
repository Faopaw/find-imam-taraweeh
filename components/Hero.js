import classes from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.h1}>All Vacancies</h1>
        <h4 className={classes.h4}>
          Use the information below to see all of the current Taraweeh vacancies
          nationwide
        </h4>
      </div>
    </>
  );
}

export default Hero;
