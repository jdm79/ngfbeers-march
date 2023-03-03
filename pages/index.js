
import { getAllCompanies } from "../companies";
import CompaniesList from "@/components/companies/companies-list";

import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <Hero />
        <CompaniesList items={companies} />
    </DefaultLayout>
       

  )
}

export default HomePage;
