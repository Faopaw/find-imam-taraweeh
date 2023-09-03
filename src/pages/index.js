import MainNavbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Vacancies from "../../components/Vacancies";
import "bootstrap/dist/css/bootstrap.min.css";
import loadData from "../../components/loadData";
<script src="https://kit.fontawesome.com/3f9fcc8d29.js" crossorigin="anonymous"></script>




export async function getStaticProps() {
  // const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;
  // const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

  const res = await loadData();
  const returnArray = JSON.stringify(res)
  return{
    props: {
      returnArray,
    }, // will be passed to the page component as props
  }
  };

export default function Home({returnArray}) {
  // <script src="https://kit.fontawesome.com/3f9fcc8d29.js" crossorigin="anonymous"></script>

  return (
    <>
      {/* <MainNavbar /> */}
      <Hero />
      <Vacancies data={returnArray}/>
    </>
  );
}
