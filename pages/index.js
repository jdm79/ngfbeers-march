import { getAllCompanies } from "../companies";
import CompaniesList from "@/components/companies/companies-list";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";
import ThumbnailRow from "@/components/ThumbnailRow";
import Links from "./links";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <Hero />
        <Banner message="Campaigning to make gluten-free beer gluten-free!" />
    </DefaultLayout>
       

  )
}

export default HomePage;
