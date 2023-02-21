import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MainNavbar from "../../components/navbar";
import Hero from "../../components/Hero";
import Vacancies from "components/Vacancies";
import "bootstrap/dist/css/bootstrap.min.css";
import loadData from "components/loadData";

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
  return (
    <>
      <MainNavbar />
      <Hero />
      <Vacancies data={returnArray}/>
    </>
  );
}
