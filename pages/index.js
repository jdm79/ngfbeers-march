import { getAllCompanies } from "../companies";
import CompaniesList from "@/components/companies/companies-list";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <Banner />
        <Hero />
        {/* <CompaniesList items={companies} /> */}
        <h1 className="w-screen flex justify-center p-5">Latest Blog Post</h1>        
    </DefaultLayout>
       

  )
}

export default HomePage;
