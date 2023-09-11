import Hero from "../../components/Hero";
import Vacancies from "../../components/Vacancies";
import "bootstrap/dist/css/bootstrap.min.css";
import loadData from "../../components/loadData";


export async function getStaticProps() {
  const res = await loadData();
  const returnArray = JSON.stringify(res);
  return{
    props: {
      returnArray,
    }, // will be passed to the page component as props
  }
  };

export default function Home({returnArray}) {
  return (
    <>
      <Hero />
      <Vacancies data={returnArray}/>
    </>
  );
}
