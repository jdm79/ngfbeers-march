import { getAllCompanies } from "../companies";
import CompaniesList from "@/components/companies/companies-list";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";
import ThumbnailRow from "@/components/ThumbnailRow";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <ThumbnailRow items={companies} />
        <Hero />
        <h1 className="w-screen flex p-5 justify-center bg-black text-white">Latest Blog Post</h1>        
    </DefaultLayout>
       

  )
}

export default HomePage;
