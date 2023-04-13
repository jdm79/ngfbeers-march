import { getAllCompanies } from "../companies";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import CompaniesList from "@/components/companies/companies-list";
import About from "@/components/About";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <Hero items={companies}/>
        <About />
        <CompaniesList items={companies}/>
    </DefaultLayout>
       

  )
}

export default HomePage;
