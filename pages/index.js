import { getAllCompanies } from "../companies";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";
import ThumbnailRow from "@/components/ThumbnailRow";
import Links from "./links";
import CompaniesList from "@/components/companies/companies-list";
import PageTitle from "@/components/PageTitle";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <Hero items={companies}/>
        <CompaniesList items={companies}/>
    </DefaultLayout>
       

  )
}

export default HomePage;
