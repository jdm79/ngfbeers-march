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
        <Banner message="Campaigning to make gluten-free beer gluten-free!"/>
        {/* <h1 className="w-screen flex p-10 justify-center bg-white text-black">Latest news to go here</h1>
        <h1 className="w-screen flex p-10 justify-center bg-white text-black">Latest blog post here</h1> */}
    </DefaultLayout>
       

  )
}

export default HomePage;
