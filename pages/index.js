import Link from "next/link";
import Nav from "@/components/Nav";
import { getAllCompanies } from "../companies";
import CompaniesList from "@/components/companies/companies-list";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <div>
        <Header />
        <Nav />
        <Hero />
        <CompaniesList items={companies} />
        <Footer />
    </div>
  )
}

export default HomePage;
