import MainNavbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Vacancies from "../../components/Vacancies";
import "bootstrap/dist/css/bootstrap.min.css";
import loadData from "../../components/loadData";

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

  // ------------------------------
  
  // const contentful = require('contentful-management');
  
  // const accessToken = process.env.PERSONAL_ACCESS_TOKEN;
  
  // const spaceId = process.env.CONTENTFUL_SPACE_ID;
  // const ENVIRONMENTID = 'master'; // this can be in .env or here if you want to change on the fly
  
  // const client = contentful.createClient({ accessToken });
  
  // client
  //   .getSpace(spaceId)
  //   .then((space) => space.getEnvironment(ENVIRONMENTID))
  //   .then((environment) =>
  //     environment.createEntry('requestType', {
  //       "fields": {
  //         "masjid": {
  //           "en-US": "Masjid Test"
  //       },
  //       "city": {
  //           "en-US": "city"
  //       },
  //       "address": {
  //           "en-US": "address"
  //       },
  //       "requirements": {
  //           "en-US": "requirements"
  //       },
  //       "contactName": {
  //           "en-US": "contactName"
  //       },
  //       "contactMobileNumber": {
  //           "en-US": "contactMobileNumber"
  //       },
  //       "extraDetails": {
  //           "en-US": "extraDetails"
  //       }
  //       },
  //     })
  //   )
  //   .then((entry) => console.log(entry))
  //   .catch(console.error);
  // ------------------------------
  return (
    <>
      {/* <MainNavbar /> */}
      <Hero />
      <Vacancies data={returnArray}/>
    </>
  );
}
