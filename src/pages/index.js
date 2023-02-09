import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainNavbar from "../../components/navbar";
import Hero from "../../components/Hero";
import Vacancies from 'components/Vacancies';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <>
      <MainNavbar/>
      <Hero/>
      <Vacancies/>
    </>
  )
}
